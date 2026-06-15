const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
}

toggleButton.addEventListener('click', () => {
  let currentTheme = htmlElement.getAttribute('data-theme');
  let newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
