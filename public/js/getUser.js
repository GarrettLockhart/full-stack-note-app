document.addEventListener('DOMContentLoaded', async () => {
  const userEmail = localStorage.getItem('email');

  try {
    const response = await fetch(`/api/user/${userEmail}`);
    const user = await response.json();
  } catch (err) {
    console.log(err);
  }
});
