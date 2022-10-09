const btn = document.querySelector('.btn');

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#form-first-name').value.trim();
  const last_name = document.querySelector('#form-last-name').value.trim();
  const email = document.querySelector('#form-email').value.trim();
  const password = document.querySelector('#form-password').value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password
      }),
      headers: { 'Content-type': 'application/json' }
    });
    if (response.ok) {
      const loginResponse = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-type': 'application/json' }
      });

      if (!loginResponse.ok) {
        const warning = document.querySelector('#warning');
        warning.textContent = 'Failed to log in.';

        // will remove error message after 2 seconds
        setTimeout(() => {
          document.querySelector('#warning').textContent = '';
        }, 2000);
      } else {
        window.location.replace('/dashboard');
      }
    } else {
      const warning = document.querySelector('#warning');
      warning.textContent = 'Failed to log in.';

      // will remove error message after 2 seconds
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

btn.addEventListener('click', signupFormHandler);
