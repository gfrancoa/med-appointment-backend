const express = require("express"),
  router = express.Router(),
  appointmentCtrl = require("../controllers/appointment.controller");

router.post("/", appointmentCtrl.create);
router.get("/", appointmentCtrl.list);
router.put("/", appointmentCtrl.cancel);
router.delete("/:_id", appointmentCtrl.delete);
router.get("/:doc_id",appointmentCtrl.aptById);

module.exports = router;
