const ctrlAppointment = {},
  Appointment = require("../models/appointment");

  //PREGUNTAS:  
  //como hacer para que los datos que yo mande en el body sean los que se actualicen
  //y los que no se queden igual? R/ Automaticamente lo que yo mande es lo que se actualiza
  //como traerme el nombre del paciente a traves de la referencia (join)
  //por que la hora no cuadra con la hora que se guardo?
  //cuando se hace la referencia por index = true al hacer una referencia
  //se esta llamando a este o a _id?

  

ctrlAppointment.create = async (req, res) => {
  const newAppointment = new Appointment({
    date: new Date (req.body.date), //debe mandarse asi: 2021-11-20
    time: new Date("1970-01-01 " + req.body.time), //debe mandarse asi: 21:07:00
    patient: req.body.patient_id,
  });

  console.log("date", newAppointment.date);
  console.log("time", newAppointment.time);
  
  await newAppointment.save();

  

  res.json({
    msg: "Appointment created successfully",
    
  });
};

ctrlAppointment.list = async (req, res) => {
  const appointments = await Appointment.find();
  

  res.json(appointments);
};

ctrlAppointment.cancel = async (req, res) => {
  const { _id, isCompleted } = req.body;
  await Appointment.findOneAndUpdate({ _id: _id }, { isCompleted: isCompleted });
  res.json({ status: true });
};

ctrlAppointment.update = async (req, res) => {
  const { _id, isCompleted, date, time, patient } = req.body;
  await Appointment.findOneAndUpdate(
    { _id: _id },
    { date: date,
      isCompleted: isCompleted,
      time: time,
      patient: patient 
    }
  );
  res.json({ status: true });
};

ctrlAppointment.aptById = async (req, res) => {
  const { doc_id } = req.params;
  const appointment = await Appointment.findOne(
    { "patient": doc_id }
  );
  res.json(appointment);
};

ctrlAppointment.delete = async (req, res) => {
  console.log(req.params._id);
  const { _id } = req.params;
  const users = await Appointment.deleteOne({ _id: _id });
  res.json({ status: true });
};

module.exports = ctrlAppointment;
