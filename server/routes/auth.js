const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../db')
const router = express.Router()
const passport = require('passport')

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body

  try {
    const hashed = await bcrypt.hash(password, 10)

    const user = await pool.query(
      `INSERT INTO users (name, email, phone, password_hash)
       VALUES ($1,$2,$3,$4) RETURNING id,email`,
      [name, email, phone || null, hashed]
    )

    await pool.query(
      `INSERT INTO auth_providers (user_id, provider, provider_user_id)
       VALUES ($1,'local',$2)`,
      [user.rows[0].id, email]
    )

    res.json({ message: 'User registered' })
  } catch (err) {
    res.status(400).json({ message: 'Email already exists' })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE email=$1`,
      [email]
    )

    if (user.rows.length === 0)
      return res.status(400).json({ message: 'Invalid credentials' })

    const valid = await bcrypt.compare(
      password,
      user.rows[0].password_hash
    )

    if (!valid)
      return res.status(400).json({ message: 'Invalid credentials' })

    const accessToken = jwt.sign(
      { id: user.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    )

    res.json({
  accessToken,
  user: {
    id: user.rows[0].id,
    name: user.rows[0].name,
    email: user.rows[0].email
  }
})
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
})
// GOOGLE LOGIN
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const jwt = require('jsonwebtoken')

    const token = jwt.sign(
      {     id: req.user.id,
    name: req.user.name,
    email: req.user.email
    },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    )

    res.redirect(`http://localhost:5173/login?token=${token}`)
  }
)
module.exports = router