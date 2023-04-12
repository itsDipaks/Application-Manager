const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const passport = require("passport");
const {UserModel} = require("../Models/Users.Model");

module.exports = passport;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8400/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      //To check the user already exist in backend or not

      const isexist = await UserModel.findOne({email: profile._json.email});
      if (!isexist) {
        const user = new UserModel({
          email: profile._json.email,
          profilepic: profile._json.picture,
          Username: profile._json.name,
        });
        await user.save();

        const {_id, profilepic, Username, email} = user;
        const payload = {
          _id,
          profilepic,
          Username,
          email,
        };
        return cb(null, payload);
      } else {
        const {_id, profilepic, Username, email} = isexist;
        const payload = {
          _id,
          profilepic,
          Username,
          email,
        };
        return cb(null, payload);
      }
    }
  )
);
