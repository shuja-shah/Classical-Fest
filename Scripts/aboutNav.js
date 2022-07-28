const hide = document.querySelector('main');
const click = document.getElementById('ham');
const remove = document.getElementById('endl');
const foti = document.getElementById('foti');
const nagi = document.querySelector('nav');
const nagi2 = document.getElementById('nagi');
const bug = document.getElementById('Sponsors');

click.addEventListener('click', () => {
  hide.style.display = 'none';
  click.style.display = 'none';
  remove.style.display = 'block';
  foti.style.display = 'none';
  nagi.classList.remove('desktop');
  nagi2.style.display = 'block';
  nagi.style.display = 'inline-block';
  bug.style.opacity = '0';
});

remove.addEventListener('click', () => {
  hide.style.display = 'block';
  click.style.display = 'block';
  remove.style.display = 'none';
  foti.style.display = 'block';
  nagi.classList.add('desktop');
  nagi2.style.display = 'none';
  nagi.style.display = 'none';
  bug.style.opacity = '1';
  window.location.reload();
});
