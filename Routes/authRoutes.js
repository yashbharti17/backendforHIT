const express = require("express");
const { login } = require("../Controllers/authControllers");

const router = express.Router();

router.post("/login", login);

module.exports = router;
