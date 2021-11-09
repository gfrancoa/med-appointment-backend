const mongoose = require("mongoose");

var PatientSchema = new mongoose.Schema({
  name: { type: String, lowercase: true },
  phone: { type: String,  }, 
  doc_id:{ type: String, required:true, index:true, unique:true }, //el dropDups true revisa si ese campo ya existe para otro usuario
  email: {type: String},
 
});

module.exports =  mongoose.model('citas_patient', PatientSchema )
