// const passport = require('passport');
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../Models/userModel');
require('dotenv').config()

const jwtSecret = process.env.REACT_APP_SECRET_KEY;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
};
const initializePassport = (passport) => {
    passport.use(new JwtStrategy(jwtOptions, async ({ password, userId }, done) => {

        try {
            const user = await User.findById({ userId });

            if (!user) return done(null, false);
            if (user.password !== password) return done(null, { msg: `Incorrect email or password` });
            return done(null, user)
        } catch (error) {
            return done(error, false);
        }
    }));
}



module.exports = initializePassport;
