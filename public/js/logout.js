const logoutBtnHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' }
  });
  if (response.ok) {
    const body = document.querySelector('body');
    const card = document.createElement('div');
    const message = document.createElement('p');
    card.classList.add('card-modal');
    message.classList.add('message');
    message.textContent = 'You have been logged out.';
    body.appendChild(card);
    card.appendChild(message);

    setTimeout(() => {
      document.querySelector('body').removeChild(card);
      window.location.replace('/');
    }, 1500);
  } else {
    const body = document.querySelector('body');
    const card = document.createElement('div');
    const message = document.createElement('p');
    card.classList.add('card-modal');
    message.classList.add('message');
    message.textContent = 'Failed to log out';
    body.appendChild(card);
    card.appendChild(message);

    setTimeout(() => {
      document.querySelector('body').removeChild(card);
      window.location.replace('/');
    }, 1500);
  }
};

document.querySelector('#logout').addEventListener('click', logoutBtnHandler);
