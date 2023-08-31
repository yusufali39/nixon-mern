var toggleButton = document.getElementById('readingModeToggle');
var darkmodeButton = document.getElementById('darkModeToggle');

var body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('reading-mode');
});

darkmodeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
