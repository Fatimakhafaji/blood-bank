const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController
} = require("../controllers/inventoryControllers")

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
//GET recent BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
   authMiddleware,
  getInventoryHospitalController);

//GET RECENT BLOOD RECORDS
//router.get(
  //"/get-recent-inventory",
  //authMiddleware,
  //getRecentInventoryController);

//GET HOSPITAL BLOOD RECORDS
//router.post(
  //"/get-inventory-hospital",
  //authMiddleware,
  //getInventoryHospitalController
//);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware,getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware,getHospitalController );

//GET orgnaisation RECORDS
router.get("/get-orgnisation", authMiddleware,getOrgnaisationController);

//GET orgnaisation RECORDS
router.get(
  "/get-orgnisation-for-hospital",authMiddleware,getOrgnaisationForHospitalController);

module.exports = router;
