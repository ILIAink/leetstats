const express = require("express");
const { getPublicProfile, getStats } = require("../controllers/profile");
const router = express.Router();

router.route("/").post(getPublicProfile);
router.route("/stats").post(getStats);
module.exports = router;
