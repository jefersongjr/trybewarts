const inputLogin = document.getElementById("input-login");
const inputPassword = document.getElementById("input-password");
const btnLogin = document.getElementById("btn-login");

function alerta() {
  if (
    inputLogin.value === "tryber@teste.com" &&
    inputPassword.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}
btnLogin.addEventListener("click", alerta);
