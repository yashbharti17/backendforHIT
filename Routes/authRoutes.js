const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

// Debugging: Log when the login route is hit
router.post("/login", (req, res, next) => {
    console.log("🟢 Login Route Hit");
    console.log("🔹 Request Body:", req.body);
    next();
}, login);

module.exports = router;
