const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  fetch(`/api/user/${email}`).then((userData) => {
    userData.json();
  });
};

document.querySelector('#login').addEventListener('click', loginFormHandler);
