const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');
const inputAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const span = document.getElementById('counter   ');

function alerta() {
  if (
    inputLogin.value === 'tryber@teste.com' && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', alerta);

function activeBtn() {
  if (inputAgreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

activeBtn();

function contador() {
  const texto = document.getElementById('textarea').value;
  const cont = 500 - texto.length;
  span.innerText = `${cont}`;
}

contador();
