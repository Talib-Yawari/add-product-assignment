const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost/your-database-name'; // Replace 'your-database-name' with your actual database name

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = mongoose;
