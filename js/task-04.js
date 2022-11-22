const counter = document.querySelector('#counter');
const value = document.querySelector('#value');

const onClick = event => {
  let valueOfCounter = Number.parseInt(value.textContent);
  event.preventDefault();

  switch (event.target.dataset.action) {
    case 'decrement':
      valueOfCounter -= 1;
      break;
    case 'increment':
      valueOfCounter += 1;
      break;
    default:
      return;
  }
  value.textContent = valueOfCounter;
};

counter.addEventListener('click', onClick);
