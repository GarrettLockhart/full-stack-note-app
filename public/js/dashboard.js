const newPostHandler = async () => {
  const title = document.querySelector('#dash-title').value.trim();
  const content = document.querySelector('#dash-content').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-type': 'application/json' }
    });

    console.log(response);
  } else {
    const body = document.querySelector('body');
    const card = document.createElement('div');
    const message = document.createElement('p');
    card.classList.add('card-modal');
    message.classList.add('message');
    message.textContent = 'Please enter all fields';
    body.appendChild(card);
    card.appendChild(message);

    setTimeout(() => {
      document.querySelector('body').removeChild(card);
    }, 1500);
  }
};

document.querySelector('.dash-btn').addEventListener('click', newPostHandler);
