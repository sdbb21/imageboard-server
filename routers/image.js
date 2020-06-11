const express = require("express");
const Image = require("../models").image;
const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Im in!!");
    const image = await Image.findAll();
    res.send(image);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { title, url, userId } = req.body;
    if (!title || !url || !userId) {
      res.status(400).send("Missing parameters to create image");
    } else {
      const newImage = await Image.create({ title, url, userId });
      res.send(newImage);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const image = await Image.findByPk(id);

    if (!image) {
      res.status(404).send("Image not found");
    } else {
      res.send(image);
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
