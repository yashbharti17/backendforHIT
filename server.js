require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import Routes (Ensure folder name is correct)
const authRoutes = require("./Routes/authRoutes");  

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Debugging: Log incoming requests
app.use((req, res, next) => {
    console.log(`🔍 Incoming Request: ${req.method} ${req.url}`);
    next();
});

// Routes
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("✅ Connected to Database:", mongoose.connection.name);
      app.listen(PORT, () => {
          console.log(`🚀 Server running on port ${PORT}`);
      });
  })
  .catch(err => console.error("❌ MongoDB Connection Error:", err));
