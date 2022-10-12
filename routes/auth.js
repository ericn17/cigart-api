const router = require("express").Router();
const User = require("../models/User")

// Register
router.post("/register", async (req,res)=>{
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  } catch (err) {
    console.log(500).json(err);
  }
});

module.exports = router;