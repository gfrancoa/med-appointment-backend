const express = require("express"),
  router = express.Router(),
  patientCtrl = require("../controllers/patient.controller");

router.post("/", patientCtrl.create);
router.get("/", patientCtrl.list);
router.get("/:id",patientCtrl.patientByDocId);

module.exports = router;
