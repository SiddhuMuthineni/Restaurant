const fs = require('fs');

let html = fs.readFileSync('c:/Users/bandl/OneDrive/Documents/Resturant/index.html', 'utf8');

const map = {
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/960px-Chicken_tikka_masala_%28cropped%29.jpg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_tikka_masala_(cropped).jpg?width=600',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/960px-%22Hyderabadi_Dum_Biryani%22.jpg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Hyderabadi_Dum_Biryani.jpg?width=600',
  'https://upload.wikimedia.org/wikipedia/commons/5/5c/Paneer_Makhani_Veggie.jpeg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Paneer_Makhani_Veggie.jpeg?width=600',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Buffalo_wings-01.jpg/960px-Buffalo_wings-01.jpg': 'https://commons.wikimedia.org/wiki/Special:FilePath/Buffalo_wings-01.jpg?width=600'
};

for (const [key, val] of Object.entries(map)) {
  html = html.split(key).join(val);
}

fs.writeFileSync('c:/Users/bandl/OneDrive/Documents/Resturant/index.html', html, 'utf8');
