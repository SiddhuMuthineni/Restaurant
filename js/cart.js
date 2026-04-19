document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  const typeRadios = document.querySelectorAll('input[name="otype"]');
  typeRadios.forEach(r => r.addEventListener('change', calculateTotals));

  const placeOrderBtn = document.getElementById('place-order-btn');
  if(placeOrderBtn) {
    placeOrderBtn.addEventListener('click', handlePlaceOrder);
  }
});

function getCart() {
  return JSON.parse(localStorage.getItem('restaurant_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('restaurant_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('storage'));
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-list');
  const summaryBox = document.getElementById('order-summary-box');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-basket"></i>
        <h2>Your cart is empty</h2>
        <p style="margin: 15px 0;">Looks like you haven't added anything to your cart yet.</p>
        <a href="menu.html" class="btn btn-primary">Browse Menu</a>
      </div>
    `;
    if(summaryBox) summaryBox.style.display = 'none';
    return;
  }

  if(summaryBox) summaryBox.style.display = 'block';
  
  let html = '<h2>Cart Items</h2>';
  
  cart.forEach(item => {
    html += `
      <div class="cart-item">
        <div class="c-img"><img src="${item.image}" alt="${item.name}"></div>
        <div class="c-details">
          <h4 class="c-title">${item.name}</h4>
          <div class="c-price">₹${item.price}</div>
          <div class="quantity-control">
            <button onclick="updateCartItemQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
            <span>${item.quantity}</span>
            <button onclick="updateCartItemQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <div style="font-weight:bold; font-size:1.1rem;">₹${item.price * item.quantity}</div>
        <button class="c-remove" onclick="removeCartItem(${item.id})" title="Remove">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
  calculateTotals();
}

function updateCartItemQty(id, change) {
  let cart = getCart();
  const item = cart.find(c => c.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(c => c.id !== id);
    }
    saveCart(cart);
  }
}

function removeCartItem(id) {
  let cart = getCart();
  cart = cart.filter(c => c.id !== id);
  saveCart(cart);
}

function calculateTotals() {
  const cart = getCart();
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  
  let delivery = 0;
  const orderType = document.querySelector('input[name="otype"]:checked');
  if (orderType && orderType.value === 'delivery') {
    delivery = 40; // Flat delivery charge
  }

  const total = subtotal + tax + delivery;

  document.getElementById('summ-sub').innerText = `₹${subtotal}`;
  document.getElementById('summ-tax').innerText = `₹${tax}`;
  document.getElementById('summ-del').innerText = `₹${delivery}`;
  document.getElementById('summ-total').innerText = `₹${total}`;
}

function handlePlaceOrder(e) {
  const btn = e.currentTarget;
  const oldText = btn.innerHTML;
  btn.innerHTML = '<div class="spinner"></div> Processing...';
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Order Placed!';
    btn.style.backgroundColor = '#2ed573';
    
    // Clear cart and redirect
    localStorage.removeItem('restaurant_cart');
    window.dispatchEvent(new Event('storage'));

    setTimeout(() => {
      alert("Order placed successfully! Redirecting to home.");
      window.location.href = 'index.html';
    }, 1500);

  }, 2000);
}
