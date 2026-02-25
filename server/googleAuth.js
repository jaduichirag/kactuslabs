const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const pool = require('./db')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/api/auth/google/callback'||'https://d0fknmf2-5000.inc1.devtunnels.ms/api/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value
        const name = profile.displayName
        const googleId = profile.id

        let user = await pool.query(
          `SELECT * FROM users WHERE email=$1`,
          [email]
        )

        if (user.rows.length === 0) {
          user = await pool.query(
            `INSERT INTO users (name, email, profile_picture)
             VALUES ($1,$2,$3)
             RETURNING *`,
            [name, email, profile.photos[0]?.value]
          )

          await pool.query(
            `INSERT INTO auth_providers (user_id, provider, provider_user_id)
             VALUES ($1,'google',$2)`,
            [user.rows[0].id, googleId]
          )
        }

        return done(null, user.rows[0])
      } catch (err) {
        return done(err, null)
      }
    }
  )
)

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))