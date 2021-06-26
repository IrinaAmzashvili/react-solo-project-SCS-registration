const express = require("express");
const asyncHandler = require("express-async-handler");
const { Class, Category } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const classes = await Class.findAll({
      order: [['startDate']],
      include: Category,
    });
    res.json(classes);
  })
);

module.exports = router;
