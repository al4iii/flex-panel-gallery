const panels = document.querySelectorAll('.panel');

let toggleActive = (e) => {  
  if (e.propertyName.includes('flex')) {
  e.target.classList.toggle('open-active');
  }
};

function toggleOpen() {  
  this.classList.toggle('open');
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));