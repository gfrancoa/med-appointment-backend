const mongoose = require("mongoose")

var AppointmentSchema = new mongoose.Schema({
  date: { type: Date },
  time: { type: Date,  }, 
  isCompleted:{ type: Boolean, default:false }, 
  patient: {type: String, ref: "citas_patient"}
 
});

module.exports =  mongoose.model('citas_appointment', AppointmentSchema )