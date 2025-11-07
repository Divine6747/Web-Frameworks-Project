const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: String,
  welcomeText: String,
  intro: String,
  mission: String,
  story: String,
  motto: String
});

// Register the model
mongoose.model('About', aboutSchema);
