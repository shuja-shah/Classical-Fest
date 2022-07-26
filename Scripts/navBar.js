const open = document.getElementById('hamburger');
const head = document.querySelector('header');
const main = document.getElementById('man');
const navigation = document.querySelector('.navbar');
const links = document.getElementById('navBarr');

open.addEventListener('click', () => {
  main.style.display = 'none';
  navigation.style.display = 'inline-block';
  links.style.display = 'flex';
  head.style.display = 'flex';
});
