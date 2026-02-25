require('dotenv').config()
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const pool = require('./db')
require('./googleAuth') // ✅ VERY IMPORTANT

const authRoutes = require('./routes/auth')

const app = express()

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
)