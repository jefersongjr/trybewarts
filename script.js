const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
const btnLogin = document.getElementById('btn-login');
const inputAgreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const p1 = document.getElementById('resposta1');
const p2 = document.getElementById('resposta2');
const p3 = document.getElementById('resposta3');
const p4 = document.getElementById('resposta4');
const p5 = document.getElementById('resposta5');
const p6 = document.getElementById('resposta6');
const p7 = document.getElementById('resposta7');
const form = document.getElementById('evaluation-form');
const nameInput = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const houseSelect = document.getElementById('house');
const emailInput = document.getElementById('input-email');
const familyRadio = document.querySelectorAll('.family');
const avaliationRadio = document.querySelectorAll('.rate');
const textArea = document.getElementById('textarea');

const content = document.querySelectorAll('.subject');

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

// referencia de consulta https://stackoverflow.com/questions/65556342/disable-a-button-if-no-checkboxes-are-clicked

// eslint-disable-next-line no-unused-vars
function activeBtn() {
  if (inputAgreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

const span = document.getElementById('counter');
// eslint-disable-next-line no-unused-vars
function contador() {
  const texto = document.getElementById('textarea').value;
  const cont = 500 - texto.length;
  span.innerText = `${cont}`;
}

function getFamily() {
  let family = '';
  for (let i = 0; i < familyRadio.length; i += 1) {
    if (familyRadio[i].checked) {
      family = familyRadio[i].value;
    }
  }
  return family;
}

function getCheck() {
  const check = [];
  for (let i = 0; i < content.length; i += 1) {
    if (content[i].checked) {
      check[i] = content[i].value;
    }
  }
  return check;
}

function getAvaliation() {
  let avaliation = '';
  for (let i = 0; i < avaliationRadio.length; i += 1) {
    if (avaliationRadio[i].checked) {
      avaliation = avaliationRadio[i].value;
    }
  }
  return avaliation;
}

function removeForm() {
  form.remove();
}

function answerForm() {
  removeForm();
  p1.innerText = `Nome: ${nameInput.value} ${lastName.value}`;
  p2.innerText = `Email: ${emailInput.value}`;
  p3.innerText = `Casa: ${houseSelect.value}`;
  p4.innerText = `Família: ${getFamily()}`;
  p5.innerText = `Matérias: ${getCheck()}`;
  p6.innerText = `Avaliação: ${getAvaliation()}`;
  p7.innerText = `Observações: ${textArea.value}`;
}

submitBtn.addEventListener('click', answerForm);
