const mongoose = require('mongoose'); 
const seeder = require('mongoose-seed'); 
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/categories' 
seeder.connect(connectionString, () => { 
  seeder.loadModels([ 
    'models/categories.js' 
  ]); 
 
 
  console.log('Clearing Models'); 
  seeder.clearModels(['categories'], () => { 
    seeder.populateModels(data, () => { 
      console.log('Finished Seeding'); 
      mongoose.connection.close(); 
    }); 
  }); 
}); 
 
 
const data = [ 
  { 
    'model': 'categories', 
    'documents': [ 
      {
            "description": "American (New)",
            "name": "newamerican",
            "enabled": false
        },
        {
            "description": "Mexican",
            "name": "mexican",
            "enabled": false
        },
        {
            "description": "Afghan",
            "name": "afghani",
            "enabled": false
        },
        {
            "description": "Barbeque",
            "name": "bbq",
            "enabled": false
        },
        {
            "description": "Gastropubs",
            "name": "gastropubs",
            "enabled": false
        },
        {
            "description": "American (Traditional)",
            "name": "tradamerican",
            "enabled": false
        },
        {
            "description": "Salad",
            "name": "salad",
            "enabled": false
        },
        {
            "description": "Japanese",
            "name": "japanese",
            "enabled": false
        },
        {
            "description": "Asian Fusion",
            "name": "asianfusion",
            "enabled": false
        },
        {
            "description": "Hot Pot",
            "name": "hotpot",
            "enabled": false
        },
        {
            "description": "Mexican",
            "name": "mexican",
            "enabled": false
        },
        {
            "description": "Vietnamese",
            "name": "vietnamese",
            "enabled": false
        },
        {
            "description": "Vegan",
            "name": "vegan",
            "enabled": false
        },
        {
            "description": "Sandwiches",
            "name": "sandwiches",
            "enabled": false
        },
        {
            "description": "Italian",
            "name": "italian",
            "enabled": false
        },
        {
            "description": "Wine Bars",
            "name": "wine_bars",
            "enabled": false
        },
        {
            "description": "Tapas/Small Plates",
            "name": "tapasmallplates",
            "enabled": false
        },
        {
            "description": "Izakaya",
            "name": "izakaya",
            "enabled": false
        },
        {
            "description": "Cafes",
            "name": "cafes",
            "enabled": false
        },
        {
            "description": "Salad",
            "name": "salad",
            "enabled": false
        },
        {
            "description": "Breakfast & Brunch",
            "name": "breakfast_brunch",
            "enabled": false
        },
        {
            "description": "Sushi Bars",
            "name": "sushi",
            "enabled": false
        },
        {
            "description": "Ramen",
            "name": "ramen",
            "enabled": false
        },
        {
            "description": "Noodles",
            "name": "noodles",
            "enabled": false
        },
        {
            "description": "Diners",
            "name": "diners",
            "enabled": false
        },
        {
            "description": "Lounges",
            "name": "lounges",
            "enabled": false
        },
        {
            "description": "Cocktail Bars",
            "name": "cocktailbars",
            "enabled": false
        },
        {
            "description": "Pizza",
            "name": "pizza",
            "enabled": false
        },
        {
            "description": "Desserts",
            "name": "desserts",
            "enabled": false
        },
        {
            "description": "Breweries",
            "name": "breweries",
            "enabled": false
        },
        {
            "description": "Beer, Wine & Spirits",
            "name": "beer_and_wine",
            "enabled": false
        },
        {
            "description": "Taiwanese",
            "name": "taiwanese",
            "enabled": false
        },
        {
            "description": "Korean",
            "name": "korean",
            "enabled": false
        },
        {
            "description": "Chinese",
            "name": "chinese",
            "enabled": false
        },
        {
            "description": "Burgers",
            "name": "burgers",
            "enabled": false
        },
        {
            "description": "Bars",
            "name": "bars",
            "enabled": false
        },
        {
            "description": "Mediterranean",
            "name": "mediterranean",
            "enabled": false
        },
        {
            "description": "Gluten-Free",
            "name": "gluten_free",
            "enabled": false
        },
        {
            "description": "Vegetarian",
            "name": "vegetarian",
            "enabled": false
        },
        {
            "description": "Gastropubs",
            "name": "gastropubs",
            "enabled": false
        }
    ] 
  } 
]; 