require('dotenv').config()
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const pool = require('./db')
require('./googleAuth')

const authRoutes = require('./routes/auth')
const path = require("path")

const app = express()

app.use(cors({
  origin: true,          // allow production domain
  credentials: true
}))

app.use(express.json())

app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,        // IMPORTANT for production (HTTPS)
    sameSite: "none"
  }
}))

app.use(passport.initialize())
app.use(passport.session())

// ✅ API routes FIRST
app.use('/api/auth', authRoutes)


// ✅ THEN serve frontend
app.use(express.static(path.join(__dirname, "../dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)