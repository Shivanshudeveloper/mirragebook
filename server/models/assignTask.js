
const mongoose = require("mongoose");

const taskAssignSchema = new mongoose.Schema({
  task:{
    type:String,
    required: true,
  },
  
  user:{
    type:String,
    required: true,
  },

  loginnedEmail:{
    type:String,
    required: true,
  },
  completionStatus:{
    type:String,
    required:true,
  },
  // loginnedId:{
  //   type:String,
  //   required: true,
  // }
  assignedDay: {
    type: String,
    required: false,
  },
  assignedMonth: {
    type: String,
    required: false,
  },
  assignedDate: {
    type: String,
    required: false,
  },
  assignedYear: {
    type: String,
    required: false,
  },
  assignedTime: {
    type: String,
    required: false,
  },
  assignedTimeMeridiem: {
    type: String,
    required: false,
  },
  completedDay: {
    type: String,
    required: false,
  },
  completedMonth: {
    type: String,
    required: false,
  },
  completedDate: {
    type: String,
    required: false,
  },
  completedYear: {
    type: String,
    required: false,
  },
  completedTime: {
    type: String,
    required: false,
  },
  completedTimeMeridiem: {
    type: String,
    required: false,
  },
});
const taskAssign = mongoose.model("taskAssign", taskAssignSchema);
module.exports = taskAssign;
