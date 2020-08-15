const express = require("express");
const router = express.Router();

//@route      POST api/users
//@desc       Register an user
//@access     Public
router.post("/", (req, res) => {
  res.send("Registers an user");
});

module.exports = router;
