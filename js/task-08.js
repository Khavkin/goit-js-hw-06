const loginForm = document.querySelector('.login-form');

const submitForm = event => {
  event.preventDefault();
  const inputs = [...event.currentTarget.elements].filter(({ tagName }) => tagName === 'INPUT');

  if (inputs.every(({ value }) => value !== '')) {
    let result = {};
    inputs.forEach(({ name, value }) => (result[name] = value));
    console.log(result);
    loginForm.reset();
  } else alert('Все поля формы должны быть заполнены!');
};

loginForm.addEventListener('submit', submitForm);
