// Data Array matching prompt specifications exactly
const menuItems = [
  { id: 1, name: "Chicken Tikka Masala", category: "Main Course", description: "Creamy tomato-based curry", price: 349, isVeg: false, rating: 4.8, pop: 100, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/960px-Chicken_tikka_masala_%28cropped%29.jpg" },
  { id: 2, name: "Paneer Butter Masala", category: "Main Course", description: "Rich buttery paneer gravy", price: 299, isVeg: true, rating: 4.7, pop: 95, image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Paneer_Makhani_Veggie.jpeg" },
  { id: 3, name: "Veg Spring Rolls", category: "Starters", description: "Crispy veggie-filled rolls", price: 199, isVeg: true, rating: 4.5, pop: 80, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Spring_Rolls_%283357696061%29.jpg/960px-Spring_Rolls_%283357696061%29.jpg" },
  { id: 4, name: "Chicken Wings", category: "Starters", description: "Spicy grilled wings", price: 279, isVeg: false, rating: 4.6, pop: 85, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Buffalo_wings-01.jpg/960px-Buffalo_wings-01.jpg" },
  { id: 5, name: "Chicken Biryani", category: "Biryani", description: "Aromatic basmati rice dish", price: 399, isVeg: false, rating: 4.9, pop: 110, image: "https://imgs.search.brave.com/xJTO_OWqUOeBiWgvQb170LfixV-A7W2M5O5Scof8xEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi92ZWdl/dGFibGUtYmlyeWFu/aS1yYWl0YS1pbmRp/YW4tdmVnLXB1bGF2/LWJhc21hdGktcmlj/ZS1icm93bmVkLWZv/b2QtYXNpYS0xODE1/OTM1ODQuanBn" },
  { id: 6, name: "Veg Biryani", category: "Biryani", description: "Fragrant vegetable biryani", price: 299, isVeg: true, rating: 4.4, pop: 70, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/960px-%22Hyderabadi_Dum_Biryani%22.jpg" },
  { id: 7, name: "Butter Naan", category: "Breads", description: "Soft butter-glazed naan", price: 59, isVeg: true, rating: 4.8, pop: 150, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/960px-Annapurna_Naan.jpg" },
  { id: 8, name: "Garlic Naan", category: "Breads", description: "Garlic-topped tandoor naan", price: 69, isVeg: true, rating: 4.9, pop: 160, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/960px-Annapurna_Naan.jpg" },
  { id: 9, name: "Gulab Jamun", category: "Desserts", description: "Syrup-soaked milk dumplings", price: 149, isVeg: true, rating: 4.7, pop: 90, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bowl_of_Gulab_Jamuns.jpg/960px-Bowl_of_Gulab_Jamuns.jpg" },
  { id: 10, name: "Chocolate Lava Cake", category: "Desserts", description: "Warm molten chocolate cake", price: 249, isVeg: true, rating: 4.8, pop: 120, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chocolate_Fondant.jpg/960px-Chocolate_Fondant.jpg" },
  { id: 11, name: "Mango Lassi", category: "Beverages", description: "Chilled mango yogurt drink", price: 129, isVeg: true, rating: 4.9, pop: 130, image: "https://imgs.search.brave.com/TmbAnX6mhsAN5Fw_crNvdYGoikkMHCRSU-Z_RgiQYZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQ3LzkwLzY1/LzM2MF9GXzY0Nzkw/NjU4OF9JVW9mOEpy/OHU2RFdxOXFCNmJy/UWc1RUxtZWs1bDFh/cy5qcGc" },
  { id: 12, name: "Cold Coffee", category: "Beverages", description: "Creamy blended iced coffee", price: 149, isVeg: true, rating: 4.6, pop: 100, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Affogato_al_Caffe.jpg/960px-Affogato_al_Caffe.jpg" },
  { id: 13, name: "Margherita Pizza", category: "Pizza", description: "Classic tomato mozzarella", price: 349, isVeg: true, rating: 4.5, pop: 85, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/960px-Pizza_Margherita_stu_spivack.jpg" },
  { id: 14, name: "BBQ Chicken Pizza", category: "Pizza", description: "Smoky BBQ chicken toppings", price: 429, isVeg: false, rating: 4.7, pop: 75, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chicken_BBQ.jpg/960px-Chicken_BBQ.jpg" },
  { id: 15, name: "Pasta Arrabbiata", category: "Pasta", description: "Spicy tomato penne pasta", price: 299, isVeg: true, rating: 4.4, pop: 60, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Penne_Arrabbiata.jpg/960px-Penne_Arrabbiata.jpg" },
  { id: 16, name: "Alfredo Pasta", category: "Pasta", description: "Creamy white sauce pasta", price: 329, isVeg: true, rating: 4.6, pop: 85, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/The_Only_Original_Alfredo_Sauce_with_Butter_and_Parmesano-Reggiano_Cheese.png/960px-The_Only_Original_Alfredo_Sauce_with_Butter_and_Parmesano-Reggiano_Cheese.png" },
  { id: 17, name: "Caesar Salad", category: "Starters", description: "Fresh romaine with dressing", price: 229, isVeg: false, rating: 4.3, pop: 50, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Caesar_salad_%282%29.jpg/960px-Caesar_salad_%282%29.jpg" },
  { id: 18, name: "Masala Dosa", category: "Main Course", description: "Crispy rice crepe with filling", price: 179, isVeg: true, rating: 4.8, pop: 140, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rameshwaram_Cafe_Dosa.jpg/960px-Rameshwaram_Cafe_Dosa.jpg" },
  { id: 19, name: "Chole Bhature", category: "Main Course", description: "Spiced chickpeas with fried bread", price: 199, isVeg: true, rating: 4.9, pop: 160, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Chole_Bhature_from_Nagpur.JPG/960px-Chole_Bhature_from_Nagpur.JPG" },
  { id: 20, name: "Tandoori Chicken", category: "Main Course", description: "Charred spiced whole chicken", price: 499, isVeg: false, rating: 4.8, pop: 110, image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Chickentandoori.jpg" },
  { id: 21, name: "Fish & Chips", category: "Main Course", description: "Battered fish with fries", price: 449, isVeg: false, rating: 4.5, pop: 65, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/960px-Fish_and_chips_blackpool.jpg" },
  { id: 22, name: "Veg Manchurian", category: "Starters", description: "Indo-Chinese veggie balls", price: 219, isVeg: true, rating: 4.4, pop: 85, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Chicken_Manchurian_%28Hyderabad_Style%29_%2811960049916%29.jpg/960px-Chicken_Manchurian_%28Hyderabad_Style%29_%2811960049916%29.jpg" },
  { id: 23, name: "Mutton Rogan Josh", category: "Main Course", description: "Kashmiri slow-cooked mutton", price: 549, isVeg: false, rating: 4.7, pop: 90, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rogan_Josh_Kashmiri.jpg/960px-Rogan_Josh_Kashmiri.jpg" },
  { id: 24, name: "Tiramisu", category: "Desserts", description: "Italian coffee-flavored dessert", price: 279, isVeg: true, rating: 4.9, pop: 110, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/960px-Tiramisu_-_Raffaele_Diomede.jpg" },
  { id: 25, name: "Fresh Lime Soda", category: "Beverages", description: "Chilled lemon fizz drink", price: 99, isVeg: true, rating: 4.3, pop: 80, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lemonade_-_27682817724.jpg/960px-Lemonade_-_27682817724.jpg" },
  { id: 26, name: "Hakka Noodles", category: "Pasta", description: "Stir-fried Indo-Chinese noodles", price: 249, isVeg: true, rating: 4.5, pop: 95, image: "https://imgs.search.brave.com/WpWl__sUTQCnLoM12-KQTVeJdDjsE4OZig3O1BljLkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdXBz/d2l0aGNob3BzdGlj/a3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9oYWtrYS1ub29k/bGVzLW9uaW9ucy1n/YXJsaWMtdmVnMi1u/b29kbGVzLXNhdWNl/LTcyMHg0ODAud2Vi/cA" }
];

// In a real app we'd fetch this. We can persist this globally if needed, for item-detail.
localStorage.setItem('restaurant_catalog', JSON.stringify(menuItems));

// State
let currentCategory = 'All';
let isVegOnly = false;
let searchQuery = '';
let currentSort = 'popular';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('menuGrid');
  if (!grid) return; // not on menu page

  // Parse URL param for category if coming from index.html
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam) {
    currentCategory = catParam;
    updateTabUI(catParam);
  }

  // Setup Listeners
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderMenu();
  });

  const categoryTabs = document.getElementById('categoryTabs');
  categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
      currentCategory = e.target.getAttribute('data-filter');
      updateTabUI(currentCategory);
      renderMenu();
    }
  });

  const vegToggle = document.getElementById('vegToggle');
  vegToggle.addEventListener('change', (e) => {
    isVegOnly = e.target.checked;
    renderMenu();
  });

  const sortSelect = document.getElementById('sortSelect');
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderMenu();
  });

  // initial Render
  renderMenu();
});

function updateTabUI(cat) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === cat) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = ''; // clear

  // First, filter
  let filtered = menuItems.filter(item => {
    const matchCat = currentCategory === 'All' || item.category === currentCategory;
    const matchVeg = isVegOnly ? item.isVeg === true : true;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
    return matchCat && matchVeg && matchSearch;
  });

  // Second, sort
  filtered.sort((a, b) => {
    if (currentSort === 'low-high') return a.price - b.price;
    if (currentSort === 'high-low') return b.price - a.price;
    if (currentSort === 'rating') return b.rating - a.rating;
    if (currentSort === 'popular') return b.pop - a.pop;
    return 0;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-muted);">No items found matching your criteria.</div>';
    return;
  }

  // Render cards
  filtered.forEach(item => {
    const badgeHtml = item.isVeg ? '<span class="veg-dot"></span> Veg' : '<span class="non-veg-dot"></span> Non-Veg';

    const card = document.createElement('div');
    card.className = 'menu-item-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-offset', '50');

    card.innerHTML = `
      <div class="item-badge">${item.category}</div>
      <div class="item-img" onclick="window.location.href='item-detail.html?id=${item.id}'" style="cursor:pointer;">
        <img src="${item.image}" loading="lazy" alt="${item.name}">
      </div>
      <div class="item-details">
        <h3 class="item-title"><a href="item-detail.html?id=${item.id}">${item.name}</a></h3>
        <p class="item-desc">${item.description}</p>
        <div class="item-meta">
          <span class="item-price">₹${item.price}</span>
          <span class="item-rating"><i class="fas fa-star"></i> ${item.rating}</span>
        </div>
        <div style="font-size:0.8rem; margin-bottom: 15px; color:#aaa;">${badgeHtml}</div>
        <button class="btn btn-primary add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;

  let cart = JSON.parse(localStorage.getItem('restaurant_cart') || '[]');

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('restaurant_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('storage')); // trigger global badge update

  // Show quick toast/feedback (can be improved)
  const btn = event.currentTarget;
  const oldText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Added';
  setTimeout(() => btn.innerHTML = oldText, 1500);
}
