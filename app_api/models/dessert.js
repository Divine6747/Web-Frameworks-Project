const mongoose = require('mongoose');

// Schema for individual ingredients in the db
const ingredientSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    description: String
});

// Schema for dessert reviews in the db
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: { 
      type: Number, 
      required: true, 
      min: 0, 
      max: 5 
    },
    reviewText: String,
    createdOn: { 
      type: Date, 
      default: Date.now 
    }
});

// Schema for dessert in the db
const dessertSchema = new mongoose.Schema({
    name: { 
      type: String, 
      required: true 
    },
    image: String,
    rating: { 
        type: Number, 
        default: 0, 
        min: 0, 
        max: 5 
    },
    ratingText: String,
    reviewCount: { 
      type: Number, 
      default: 0 
    },
    description: String,
    ingredients: [ingredientSchema],
    steps: [String],
    reviews: [reviewSchema]
});

mongoose.model('Dessert', dessertSchema);
