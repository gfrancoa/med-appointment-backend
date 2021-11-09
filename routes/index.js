const { Router } = require("express"),
  router = Router();

router.use("/patient", require("../routes/patient.route"));
router.use("/appointment", require("../routes/appointment.route"));

module.exports = router;
