const fs = require('fs');

async function main() {
  const titles = [
    'Chicken_tikka_masala', 'Paneer_makhani', 'Spring_roll', 'Buffalo_wing',
    'Biryani', 'Naan', 'Gulab_jamun', 'Molten_chocolate_cake', 'Mango_Lassi',
    'Iced_coffee', 'Pizza_Margherita', 'Barbecue_chicken', 'Arrabbiata_sauce',
    'Fettuccine_Alfredo', 'Caesar_salad', 'Masala_dosa', 'Chole_bhature',
    'Tandoori_chicken', 'Fish_and_chips', 'Manchurian_(dish)', 'Rogan_josh',
    'Tiramisu', 'Lemonade', 'Hakka_noodles', 'Dal_makhani'
  ];
  
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles.join('|')}&prop=pageimages&format=json&pithumbsize=600`;
  const res = await fetch(url);
  const data = await res.json();
  const pages = data.query.pages;
  
  const imgMap = {};
  for (let k in pages) {
    if (pages[k].thumbnail) {
      imgMap[pages[k].title.toLowerCase()] = pages[k].thumbnail.source;
    }
  }

  const mapping = {
    "Chicken Tikka Masala": imgMap['chicken tikka masala'],
    "Paneer Butter Masala": imgMap['paneer makhani'],
    "Veg Spring Rolls": imgMap['spring roll'],
    "Chicken Wings": imgMap['buffalo wing'],
    "Chicken Biryani": imgMap['biryani'],
    "Veg Biryani": imgMap['biryani'], // reuse
    "Butter Naan": imgMap['naan'],
    "Garlic Naan": imgMap['naan'],
    "Gulab Jamun": imgMap['gulab jamun'],
    "Chocolate Lava Cake": imgMap['molten chocolate cake'],
    "Mango Lassi": imgMap['mango lassi'],
    "Cold Coffee": imgMap['iced coffee'],
    "Margherita Pizza": imgMap['pizza margherita'],
    "BBQ Chicken Pizza": imgMap['barbecue chicken'],
    "Pasta Arrabbiata": imgMap['arrabbiata sauce'],
    "Alfredo Pasta": imgMap['fettuccine alfredo'],
    "Caesar Salad": imgMap['caesar salad'],
    "Masala Dosa": imgMap['masala dosa'],
    "Chole Bhature": imgMap['chole bhature'],
    "Tandoori Chicken": imgMap['tandoori chicken'],
    "Fish & Chips": imgMap['fish and chips'],
    "Veg Manchurian": imgMap['manchurian (dish)'],
    "Mutton Rogan Josh": imgMap['rogan josh'],
    "Tiramisu": imgMap['tiramisu'],
    "Fresh Lime Soda": imgMap['lemonade'],
    "Hakka Noodles": imgMap['hakka noodles']
  };

  // Now read javascript
  let content = fs.readFileSync('c:/Users/bandl/OneDrive/Documents/Resturant/js/menu.js', 'utf8');
  
  // Basic replacement
  for (const [name, img] of Object.entries(mapping)) {
    if (img) {
      // Regex to find the object with name: "Name" and replace its image
      const regex = new RegExp(`(name:\\s*"${name}".*?image:\\s*")[^"]+(")`, 'g');
      content = content.replace(regex, `$1${img}$2`);
    } else {
        console.log("Missing image for", name);
    }
  }
  
  fs.writeFileSync('c:/Users/bandl/OneDrive/Documents/Resturant/js/menu.js', content, 'utf8');
  console.log('Successfully updated js/menu.js with Wikipedia images!');
}

main().catch(console.error);
