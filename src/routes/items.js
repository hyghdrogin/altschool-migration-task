const express = require("express");
const { fetchItems} = require("../controllers/item.js");
const { verifyToken } = require("../middleware/authentication.js");

const router = express.Router();

router.get("/", verifyToken, fetchItems);

module.exports = router;