const btn = document.querySelector('.btn');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-type': 'application/json' }
    });
    window.location.replace('/dashboard');
    if (!response.ok) {
      const warning = document.querySelector('#warning');
      warning.textContent = 'Failed to log in.';

      // remove error message after 2 seconds
      setTimeout(() => {
        document.querySelector('#warning').textContent = '';
      }, 2000);
    }
  } else {
    const warning = document.querySelector('#warning');
    warning.textContent = 'Please enter all fields.';

    setTimeout(() => {
      document.querySelector('#warning').textContent = '';
    }, 2000);
  }
};

btn.addEventListener('click', loginFormHandler);
