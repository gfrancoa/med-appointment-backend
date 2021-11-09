const ctrlPatient = {},
  Patient = require("../models/patient")

ctrlPatient.create = async (req, res) => {
  //este try- catch es para mostrar un error si hay duplicados
  try
{
  const newPatient = new Patient({

    name: req.body.name,
    phone: req.body.phone,
    doc_id: req.body.doc_id,
    email: req.body.email,
  });
  await newPatient.save();
  //aqui se esta devolviendo el nuevo id generado
  res.json({ msg: "Patient created successfully", patient_id: newPatient._id });
}  

catch (err) {
  res.json({err})
}
};

ctrlPatient.list = async (req, res) => {
  const patients = await Patient.find();
  //console.log("users", users);

  res.json(patients);
};

ctrlPatient.patientByDocId = async (req,res) => {
  const patient = await Patient.findOne({"doc_id":req.params.id})

  res.json(patient)
}

module.exports = ctrlPatient
