const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { bloodGroupDetailesController } = require("../controllers/analyticsControllers");


const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddleware,bloodGroupDetailesController);


module.exports = router;
