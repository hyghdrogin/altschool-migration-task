const express = require("express");
const userRouter = require("./user");
const itemsRouter = require("./items");

const router = express.Router();

router.use("/users", userRouter);
router.use("/items", itemsRouter);

module.exports = router;