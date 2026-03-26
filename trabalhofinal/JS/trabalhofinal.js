// Dark Mode
let button = document.getElementById("darkmode");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "Mudar tema ☀️";
  } else {
    button.textContent = "Mudar Tema 🌙";
  }
});

// Botão Reset

let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  window.location.reload();
});

// Evento Teclado Enter

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "Escape" || event.key == "escape") {
    alert("Tem a certeza que acabou o exercício?");
  }
});

// Color Picker

let picker = document.getElementById("favColor");

picker.oninput = function () {
  console.log("Cor escolhida:", picker.value);
};

// Função Login

function login() {
  if (localStorage.getItem("user_login")) {
    alert("Olá " + localStorage.getItem("user_login"));
  } else {
    let user = prompt("qual a teu UserName?");

    // 'user_login' funciona como nome da key. pode ter qualquer nome.
    // o user é a variavel que muda a cada refresh.

    localStorage.setItem("user_login", user);
  }
}

// Adicionar Novo Hobby

let addHobbyBtn = document.getElementById("addHobbyBtn");
let hobbyList = document.getElementById("hobbyList");

addHobbyBtn.onclick = function () {
  let hobby = prompt("Qual hobby deseja adicionar?");

  if (!hobby) {
    alert("Nenhum hobby foi adicionado.");
    return;
  }

  let newLi = document.createElement("li");
  newLi.innerText = hobby;

  hobbyList.appendChild(newLi);

  alert("Hobby adicionado com sucesso!");
};

// Mudar Avatar

let avatarImg = document.getElementById("avatar");
let changeAvatarBtn = document.getElementById("changeAvatar");
let avatarFileInput = document.getElementById("avatarFile");

let originalAvatar = avatarImg.src;

changeAvatarBtn.onclick = function () {
  avatarFileInput.click();
  event.preventDefault();
};

avatarFileInput.onchange = function () {
  let file = avatarFileInput.files[0];

  if (!file) {
    alert("Nenhuma imagem selecionada.");
    return;
  }

  let tempURL = URL.createObjectURL(file);

  avatarImg.src = tempURL;

  alert("Avatar atualizado!");
};

window.onload = function () {
  avatarImg.src = originalAvatar;
};

// Portfólio

let originalName = document.getElementById("firstname").value;
let originalText = document.getElementById("text_area").value;
let originalColor = document.getElementById("favColor").value;
let originalPhoto = document.getElementById("me_photo").src;

let updateBtn = document.getElementById("atualizar_portfolio");

updateBtn.onclick = function () {
  let newName = document.getElementById("firstname").value;
  let newText = document.getElementById("text_area").value;
  let newColor = document.getElementById("favColor").value;
  let newPhotoURL = document.getElementById("Foto_URL").value;

  if (newName.trim() !== "") {
    document.querySelector(".card-title").innerText = newName;
  }

  if (newText.trim() !== "") {
    document.querySelector(".card-text").innerText = newText;
  }

  document.body.style.background = newColor;

  if (newColor.trim() !== "") {
    document.querySelector(".card-text").innerText =
      "Cor escolhida: " + newColor;
  }

  if (newPhotoURL.trim() !== "") {
    document.getElementById("me_photo").src = newPhotoURL;
  }

  alert("Portfólio atualizado temporariamente!");
};

// Login e Password

let emailInput = document.getElementById("InputEmail");
let passwordInput = document.getElementById("InputPassword");
let hintInput = document.getElementById("InputHint");

let btnLogin = document.getElementById("btnLogin");
let btnLogoff = document.getElementById("btnLogoff");
let btnCriar = document.getElementById("btnCriar");
let btnHint = document.getElementById("btnHint");

btnCriar.onclick = function () {
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  let hint = hintInput.value.trim();

  if (email == "" || password == "") {
    alert("Preencha email e password.");
    return;
  }

  localStorage.setItem("user_email", email);
  localStorage.setItem("user_password", password);
  localStorage.setItem("user_hint", hint);

  alert("Conta criada com sucesso!");

  emailInput.value = "";
  passwordInput.value = "";
  hintInput.value = "";
};

btnLogin.onclick = function () {
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  let savedEmail = localStorage.getItem("user_email");
  let savedPassword = localStorage.getItem("user_password");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("logged_in", "true");

    btnLogin.style.backgroundColor = "#388143";
    btnLogin.style.borderColor = "#388143";
    btnLogin.style.color = "white";

    alert("Login efetuado com sucesso!");
  } else {
    alert("Email ou password incorretos.");
  }
};

// ===============================
// LOGOFF
// ===============================
btnLogoff.onclick = function () {
  localStorage.removeItem("logged_in");
  alert("Você saiu da conta.");

  emailInput.value = "";
  passwordInput.value = "";
  hintInput.value = "";
};

// ===============================
// ESQUECI A SENHA
// ===============================

btnHint.onclick = function () {
  let hint = localStorage.getItem("user_hint");

  if (hint && hint.trim() !== "") {
    alert("Dica da password: " + hint);
  } else {
    alert("Nenhuma dica foi cadastrada.");
  }
};
