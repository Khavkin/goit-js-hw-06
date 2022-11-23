const inputField = document.querySelector('#name-input');
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', event => {
  event.preventDefault();

  inputField.value !== ''
    ? (outputField.textContent = inputField.value)
    : (outputField.textContent = 'Anonymous');
});
