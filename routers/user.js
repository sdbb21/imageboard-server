const express = require("express");
const User = require("../models").user;
const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Im in!!");
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("Missing parameters to create user");
    } else {
      const newUser = await User.create({ email, password, fullName });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
