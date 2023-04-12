const express = require("express");
const {Connection} = require("./src/Config/db");
let passport = require("./src/Config/google-auth");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home");
});

app.get(
  "/auth/google",
  passport.authenticate("google", {scope: ["profile", "email"]})
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {failureRedirect: "/login", session: false}),
  function (req, res) {
    res.redirect("/home");
    res.send(req.user);
  }
);

app.listen(8400, async () => {
  console.log("Server Started At http://localhost:8400");
  try {
    await Connection;
    console.log("Connected To Database");
  } catch (err) {
    console.log(err);
  }
});
