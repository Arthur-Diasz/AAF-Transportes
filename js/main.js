document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector('.navbar-collapse').classList.remove('show');
    })
  });