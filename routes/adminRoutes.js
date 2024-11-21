const express = require ('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController } = require('../controllers/adminController')
const adminMiddleware = require('../middlewares/adminMiddleware')

//Routes
//router object
const router = express.Router()

//Routes

//Get || Donar list
router.get(
    '/donar-list',
    authMiddleware,
    adminMiddleware ,
    getDonarsListController
);

//Get || Hospital list
router.get(
    '/hospital-list',
    authMiddleware,
    adminMiddleware ,
    getHospitalListController
);

//Get || Org list
router.get(
    '/org-list',
    authMiddleware,
    adminMiddleware ,
    getOrgListController
);


//==============================
//DELETE DONAR || GET
router.delete(
    '/delete-donar/:id',
    authMiddleware,
    adminMiddleware ,
    deleteDonarController
)


//Export
module.exports = router ;