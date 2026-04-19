const fs = require('fs');

const menuItems = [
  { id: 1, name: "Chicken Tikka Masala", category: "Main Course", description: "Creamy tomato-based curry", price: 349, isVeg: false, rating: 4.8, pop: 100, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_tikka_masala_(cropped).jpg?width=600" },
  { id: 2, name: "Paneer Butter Masala", category: "Main Course", description: "Rich buttery paneer gravy", price: 299, isVeg: true, rating: 4.7, pop: 95, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Makhani_Veggie.jpeg?width=600" },
  { id: 3, name: "Veg Spring Rolls", category: "Starters", description: "Crispy veggie-filled rolls", price: 199, isVeg: true, rating: 4.5, pop: 80, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Spring_Rolls_(3357696061).jpg?width=600" },
  { id: 4, name: "Chicken Wings", category: "Starters", description: "Spicy grilled wings", price: 279, isVeg: false, rating: 4.6, pop: 85, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Buffalo_wings-01.jpg?width=600" },
  { id: 5, name: "Chicken Biryani", category: "Biryani", description: "Aromatic basmati rice dish", price: 399, isVeg: false, rating: 4.9, pop: 110, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyderabadi_Dum_Biryani.jpg?width=600" },
  { id: 6, name: "Veg Biryani", category: "Biryani", description: "Fragrant vegetable biryani", price: 299, isVeg: true, rating: 4.4, pop: 70, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyderabadi_Dum_Biryani.jpg?width=600" },
  { id: 7, name: "Butter Naan", category: "Breads", description: "Soft butter-glazed naan", price: 59, isVeg: true, rating: 4.8, pop: 150, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Annapurna_Naan.jpg?width=600" },
  { id: 8, name: "Garlic Naan", category: "Breads", description: "Garlic-topped tandoor naan", price: 69, isVeg: true, rating: 4.9, pop: 160, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Annapurna_Naan.jpg?width=600" },
  { id: 9, name: "Gulab Jamun", category: "Desserts", description: "Syrup-soaked milk dumplings", price: 149, isVeg: true, rating: 4.7, pop: 90, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bowl_of_Gulab_Jamuns.jpg?width=600" },
  { id: 10, name: "Chocolate Lava Cake", category: "Desserts", description: "Warm molten chocolate cake", price: 249, isVeg: true, rating: 4.8, pop: 120, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_Fondant.jpg?width=600" },
  { id: 11, name: "Mango Lassi", category: "Beverages", description: "Chilled mango yogurt drink", price: 129, isVeg: true, rating: 4.9, pop: 130, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mango-Lassi.jpg?width=600" },
  { id: 12, name: "Cold Coffee", category: "Beverages", description: "Creamy blended iced coffee", price: 149, isVeg: true, rating: 4.6, pop: 100, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Affogato_al_Caffe.jpg?width=600" },
  { id: 13, name: "Margherita Pizza", category: "Pizza", description: "Classic tomato mozzarella", price: 349, isVeg: true, rating: 4.5, pop: 85, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pizza_Margherita_stu_spivack.jpg?width=600" },
  { id: 14, name: "BBQ Chicken Pizza", category: "Pizza", description: "Smoky BBQ chicken toppings", price: 429, isVeg: false, rating: 4.7, pop: 75, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_BBQ.jpg?width=600" },
  { id: 15, name: "Pasta Arrabbiata", category: "Pasta", description: "Spicy tomato penne pasta", price: 299, isVeg: true, rating: 4.4, pop: 60, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Penne_Arrabbiata.jpg?width=600" },
  { id: 16, name: "Alfredo Pasta", category: "Pasta", description: "Creamy white sauce pasta", price: 329, isVeg: true, rating: 4.6, pop: 85, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fettuccine_Alfredo.jpg?width=600" },
  { id: 17, name: "Caesar Salad", category: "Starters", description: "Fresh romaine with dressing", price: 229, isVeg: false, rating: 4.3, pop: 50, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Caesar_salad_(2).jpg?width=600" },
  { id: 18, name: "Masala Dosa", category: "Main Course", description: "Crispy rice crepe with filling", price: 179, isVeg: true, rating: 4.8, pop: 140, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rameshwaram_Cafe_Dosa.jpg?width=600" },
  { id: 19, name: "Chole Bhature", category: "Main Course", description: "Spiced chickpeas with fried bread", price: 199, isVeg: true, rating: 4.9, pop: 160, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chole_Bhature_from_Nagpur.JPG?width=600" },
  { id: 20, name: "Tandoori Chicken", category: "Main Course", description: "Charred spiced whole chicken", price: 499, isVeg: false, rating: 4.8, pop: 110, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chickentandoori.jpg?width=600" },
  { id: 21, name: "Fish & Chips", category: "Main Course", description: "Battered fish with fries", price: 449, isVeg: false, rating: 4.5, pop: 65, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fish_and_chips_blackpool.jpg?width=600" },
  { id: 22, name: "Veg Manchurian", category: "Starters", description: "Indo-Chinese veggie balls", price: 219, isVeg: true, rating: 4.4, pop: 85, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Manchurian_(Hyderabad_Style)_(11960049916).jpg?width=600" },
  { id: 23, name: "Mutton Rogan Josh", category: "Main Course", description: "Kashmiri slow-cooked mutton", price: 549, isVeg: false, rating: 4.7, pop: 90, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rogan_Josh_Kashmiri.jpg?width=600" },
  { id: 24, name: "Tiramisu", category: "Desserts", description: "Italian coffee-flavored dessert", price: 279, isVeg: true, rating: 4.9, pop: 110, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tiramisu_-_Raffaele_Diomede.jpg?width=600" },
  { id: 25, name: "Fresh Lime Soda", category: "Beverages", description: "Chilled lemon fizz drink", price: 99, isVeg: true, rating: 4.3, pop: 80, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lemonade_-_27682817724.jpg?width=600" },
  { id: 26, name: "Hakka Noodles", category: "Pasta", description: "Stir-fried Indo-Chinese noodles", price: 249, isVeg: true, rating: 4.5, pop: 95, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hakka_Noodles.png?width=600" }
];

let content = fs.readFileSync('c:/Users/bandl/OneDrive/Documents/Resturant/js/menu.js', 'utf8');

// Replace everything from `const menuItems = [` strictly up to `];`
const regex = /const menuItems = \[\s*[\s\S]*?\s*\];/;
content = content.replace(regex, 'const menuItems = ' + JSON.stringify(menuItems, null, 2) + ';');

fs.writeFileSync('c:/Users/bandl/OneDrive/Documents/Resturant/js/menu.js', content, 'utf8');
console.log('Successfully fully replaced menu.js with Special:FilePath URLs.');
