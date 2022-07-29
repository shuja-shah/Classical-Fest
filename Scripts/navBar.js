const open = document.getElementById('hamburger');
const head = document.querySelector('header');
const main = document.getElementById('man');
const navigation = document.querySelector('.navbar');
const links = document.getElementById('navBarr');
const linear = document.getElementById('logo');
const close = document.getElementById('close-btn');
const footer = document.querySelector('.last');

open.addEventListener('click', () => {
  main.style.display = 'none';
  navigation.style.display = 'grid';
  links.style.display = 'flex';
  links.style.height = '80%';
  links.style.flexDirection = 'column';
  head.style.display = 'block';
  open.style.display = 'none';
  linear.style.display = 'flex';
  linear.style.justifyContent = 'space-around';
  linear.style.alignItems = 'center';
  linear.style.width = '100%';
  footer.style.opacity = '0';
});

close.addEventListener('click', () => {
  main.style.display = 'block';
  navigation.style.display = 'none';
  links.style.display = 'none';
  open.style.display = 'block';
  footer.style.opacity = '1';
});
