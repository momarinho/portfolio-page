function handleClick(event) {
  const activeButton = document.querySelector('.active-btn');
  const activeElement = document.querySelector('.active');
  const clickedButton = event.currentTarget;
  const targetId = clickedButton.dataset.id;
  const targetElement = document.getElementById(targetId);

  activeButton.classList.remove('active-btn');
  clickedButton.classList.add('active-btn');
  activeElement.classList.remove('active');
  targetElement.classList.add('active');
}

function handleThemeToggle() {
  document.body.classList.toggle('light-mode');
}

function PageTransitions() {
  const buttons = document.querySelectorAll('.control');
  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });

  const themeButton = document.querySelector('.theme-btn');
  themeButton.addEventListener('click', handleThemeToggle);
}

PageTransitions();
