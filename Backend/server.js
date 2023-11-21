// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
var router = express.Router();
const multer = require('multer');
const Ticket = require('./Models/CreateTicketSchema');

const app = express();
const PORT = process.env.PORT || 9999;

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/iTickets', {
    mongoose.connect("mongodb+srv://meelasreeya24:Sreeya9393@cluster0.glvt5hy.mongodb.net/?retryWrites=true&w=majority", {
       
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log('MongoDB Atlas connection error: ', err));

// Middleware
app.use(cors());

app.use(bodyParser.json());

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/'); // Store files in the 'uploads' directory
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
  
// const upload = multer({ storage: storage });

app.post('/submitTicket' , async (req, res) => {
    console.log(req.file);
    try {
        console.log("data 1");
        
      const { title, description, category, priority, assignee } = req.body;
    //   const documentPath = req.file.path;
      console.log('Received form data:', req.body);
  
      // Create a new form entry
      const newTicket = new Ticket({
        title,
        description,
        category,
        priority,
        assignee,
        // document: documentPath,
        // Add more fields as needed
      });
      console.log("data 2");
      // Save the entry to the database
      await newTicket.save();
      console.log("data 3");
      res.json({ success: true, message: 'Form submitted successfully' });
      console.log("data 4");
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });


  app.get('/getOpenedTickets', async (req, res) => {
    try {
      console.log('Fetching opened tickets...');
      const data = await Ticket.find({});
      console.log('Data from MongoDB:', data);
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
//   app.get('/getOpenedTickets', (req, res) => {
//     return Ticket.find({}).then(data => {
//       console.log("list data", data);
//       return res.json(data)});
//   } );
  
// Routes
// Define your routes here (e.g., handling form submissions)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});