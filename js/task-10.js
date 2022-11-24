function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const amount = document.querySelector('#controls > input');

const targetDiv = document.querySelector('#boxes');

const createBoxes = amount => {
  let markup = '';
  const minSize = 30;
  destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    markup =
      markup +
      `<div style="background-color:${getRandomHexColor()}; width:${minSize + i * 10}px;height:${
        minSize + i * 10
      }px"></div>`;
  }
  targetDiv.insertAdjacentHTML('afterbegin', markup);
};

const destroyBoxes = () => {
  targetDiv.innerHTML = '';
};

const btnCreateOnClick = event => {
  event.preventDefault();
  if (amount.value > 0 && amount.value <= 100) createBoxes(amount.value);
  else alert('Количество должно быть в промежутке от 1 до 100');
};

const btnDestroyOnClick = event => {
  event.preventDefault();
  destroyBoxes();
};

btnCreate.addEventListener('click', btnCreateOnClick);
btnDestroy.addEventListener('click', btnDestroyOnClick);
