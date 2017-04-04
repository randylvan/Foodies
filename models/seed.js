const mongoose = require('mongoose'); 
const seeder = require('mongoose-seed'); 
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/foodie' 
seeder.connect(connectionString, () => { 
  seeder.loadModels([ 
    'models/category.js' 
  ]); 
 
 
  console.log('Clearing Models'); 
  seeder.clearModels(['Category'], () => { 
    seeder.populateModels(data, () => { 
      console.log('Finished Seeding'); 
      mongoose.connection.close(); 
    }); 
  }); 
}); 
 
 
const data = [ 
  { 
    'model': 'Category', 
    'documents': [ 
      {
            "description": "American (New)",
            "title": "newamerican",
            "enabled": false
        },
        {
            "description": "Mexican",
            "title": "mexican",
            "enabled": false
        },
        {
            "description": "Afghan",
            "title": "afghani",
            "enabled": false
        },
        {
            "description": "Barbeque",
            "title": "bbq",
            "enabled": false
        },
        {
            "description": "Gastropubs",
            "title": "gastropubs",
            "enabled": false
        },
        {
            "description": "American (Traditional)",
            "title": "tradamerican",
            "enabled": false
        },
        {
            "description": "Salad",
            "title": "salad",
            "enabled": false
        },
        {
            "description": "Japanese",
            "title": "japanese",
            "enabled": false
        },
        {
            "description": "Asian Fusion",
            "title": "asianfusion",
            "enabled": false
        },
        {
            "description": "Hot Pot",
            "title": "hotpot",
            "enabled": false
        },
        {
            "description": "Vietnamese",
            "title": "vietnamese",
            "enabled": false
        },
        {
            "description": "Vegan",
            "title": "vegan",
            "enabled": false
        },
        {
            "description": "Sandwiches",
            "title": "sandwiches",
            "enabled": false
        },
        {
            "description": "Italian",
            "title": "italian",
            "enabled": false
        },
        {
            "description": "Wine Bars",
            "title": "wine_bars",
            "enabled": false
        },
        {
            "description": "Tapas/Small Plates",
            "title": "tapasmallplates",
            "enabled": false
        },
        {
            "description": "Izakaya",
            "title": "izakaya",
            "enabled": false
        },
        {
            "description": "Cafes",
            "title": "cafes",
            "enabled": false
        },
        {
            "description": "Breakfast & Brunch",
            "title": "breakfast_brunch",
            "enabled": false
        },
        {
            "description": "Sushi Bars",
            "title": "sushi",
            "enabled": false
        },
        {
            "description": "Ramen",
            "title": "ramen",
            "enabled": false
        },
        {
            "description": "Noodles",
            "title": "noodles",
            "enabled": false
        },
        {
            "description": "Diners",
            "title": "diners",
            "enabled": false
        },
        {
            "description": "Lounges",
            "title": "lounges",
            "enabled": false
        },
        {
            "description": "Cocktail Bars",
            "title": "cocktailbars",
            "enabled": false
        },
        {
            "description": "Pizza",
            "title": "pizza",
            "enabled": false
        },
        {
            "description": "Desserts",
            "title": "desserts",
            "enabled": false
        },
        {
            "description": "Breweries",
            "title": "breweries",
            "enabled": false
        },
        {
            "description": "Beer, Wine & Spirits",
            "title": "beer_and_wine",
            "enabled": false
        },
        {
            "description": "Taiwanese",
            "title": "taiwanese",
            "enabled": false
        },
        {
            "description": "Korean",
            "title": "korean",
            "enabled": false
        },
        {
            "description": "Chinese",
            "title": "chinese",
            "enabled": false
        },
        {
            "description": "Burgers",
            "title": "burgers",
            "enabled": false
        },
        {
            "description": "Bars",
            "title": "bars",
            "enabled": false
        },
        {
            "description": "Mediterranean",
            "title": "mediterranean",
            "enabled": false
        },
        {
            "description": "Gluten-Free",
            "title": "gluten_free",
            "enabled": false
        },
        {
            "description": "Vegetarian",
            "title": "vegetarian",
            "enabled": false
        }
    ] 
  } 
]; 