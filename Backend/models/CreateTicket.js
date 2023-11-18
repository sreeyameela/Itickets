
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  // Define your schema fields based on the form data
  title:String,
  description:String,
  category:String,
  priority:String,
  assignee:String,
//   document: String,
  // Add more fields as needed
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
