// Authentication and Route Protection Logic

document.addEventListener('DOMContentLoaded', () => {
  const isLoginPage = window.location.pathname.endsWith('login.html') || window.location.pathname.endsWith('/');
  const currentUser = localStorage.getItem('currentUser');

  // Protect Routes
  if (!currentUser && !isLoginPage) {
    window.location.href = 'login.html';
    return;
  }
  
  if (currentUser && window.location.pathname.endsWith('login.html')) {
    window.location.href = 'index.html';
    return;
  }

  // Set up navbar user info if logged in
  if (currentUser) {
    try {
      const user = JSON.parse(currentUser);
      const userAvatar = document.getElementById('user-avatar-name');
      if (userAvatar) {
        userAvatar.textContent = user.name ? user.name.charAt(0).toUpperCase() : 'U';
      }
    } catch(e) {
      console.error('Error parsing user', e);
    }
  }

  // Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      window.location.href = 'login.html';
    });
  }

  // Handle Login Page Logic
  if (isLoginPage) {
    initAuthForms();
    createFloatingIcons();
  }
});

function initAuthForms() {
  const loginFormWrap = document.getElementById('login-form-wrap');
  const registerFormWrap = document.getElementById('register-form-wrap');
  
  const showRegisterLink = document.getElementById('show-register');
  const showLoginLink = document.getElementById('show-login');

  if (showRegisterLink && showLoginLink) {
    showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginFormWrap.style.display = 'none';
      registerFormWrap.style.display = 'block';
    });

    showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerFormWrap.style.display = 'none';
      loginFormWrap.style.display = 'block';
    });
  }

  setupValidation('login-form', true);
  setupValidation('register-form', false);
}

function setupValidation(formId, isLogin) {
  const form = document.getElementById(formId);
  if (!form) return;

  const emailInput = form.querySelector('input[type="email"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const nameInput = form.querySelector('input[type="text"]');

  const validateField = (input, regex, errorMsgEl) => {
    const isValid = regex.test(input.value);
    const validIcon = input.nextElementSibling; // Assuming valid-icon is right after
    
    if (!isValid && input.value.length > 0) {
      errorMsgEl.style.display = 'block';
      if(validIcon && validIcon.classList.contains('valid-icon')) validIcon.style.display = 'none';
      input.style.borderColor = '#ff4757';
    } else if (isValid) {
      errorMsgEl.style.display = 'none';
      if(validIcon && validIcon.classList.contains('valid-icon')) validIcon.style.display = 'block';
      input.style.borderColor = '#2ed573';
    } else {
      errorMsgEl.style.display = 'none';
      if(validIcon && validIcon.classList.contains('valid-icon')) validIcon.style.display = 'none';
      input.style.borderColor = '#333';
    }
    return isValid;
  };

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const errorMsg = document.getElementById(`${formId}-email-error`);
      validateField(emailInput, /^[a-zA-Z0-9._%+-]+@gmail\.com$/, errorMsg);
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      const errorMsg = document.getElementById(`${formId}-password-error`);
      // At least 8 chars, 1 uppercase, 1 number
      validateField(passwordInput, /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, errorMsg);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const emailErr = document.getElementById(`${formId}-email-error`);
    const passErr = document.getElementById(`${formId}-password-error`);

    if (!validateField(emailInput, /^[a-zA-Z0-9._%+-]+@gmail\.com$/, emailErr)) isValid = false;
    if (!validateField(passwordInput, /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, passErr)) isValid = false;
    
    if(nameInput) {
       if(nameInput.value.trim() === '') isValid = false;
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<div class="spinner"></div>';
      submitBtn.disabled = true;

      setTimeout(() => {
        if (!isLogin) {
          // Register logic
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          const emailExists = users.some(u => u.email === emailInput.value);
          if (emailExists) {
            emailErr.textContent = "Email already registered!";
            emailErr.style.display = 'block';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            return;
          }

          users.push({
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value // In real app, never store plain text!
          });
          localStorage.setItem('users', JSON.stringify(users));
          
          // Auto login
          localStorage.setItem('currentUser', JSON.stringify({
            name: nameInput.value,
            email: emailInput.value
          }));
          window.location.href = 'index.html';
        } else {
          // Login logic
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          const user = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);
          
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify({
              name: user.name,
              email: user.email
            }));
            window.location.href = 'index.html';
          } else {
            passErr.textContent = "Invalid email or password";
            passErr.style.display = 'block';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }
        }
      }, 1500); // simulate network request
    }
  });
}

function createFloatingIcons() {
  const bg = document.querySelector('.login-bg');
  if(!bg) return;
  const icons = ['🍕', '🍔', '🍣', '🥗', '🍝', '🍩', '🍹', '🍷', '🍗'];
  for (let i = 0; i < 15; i++) {
    const el = document.createElement('div');
    el.classList.add('floating-icon');
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${8 + Math.random() * 10}s`;
    el.style.fontSize = `${1.5 + Math.random() * 1.5}rem`;
    bg.appendChild(el);
  }
}
