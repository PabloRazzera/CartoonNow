function cadastro(){

```
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const usuario = {
    nome,
    email,
    senha
};

localStorage.setItem(
    email,
    JSON.stringify(usuario)
);

alert("Conta criada!");

window.location.href = "login.html";
```

}

function login(){

```
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

const usuario = JSON.parse(
    localStorage.getItem(email)
);

if(!usuario){
    alert("Conta não encontrada");
    return;
}

if(usuario.senha !== senha){
    alert("Senha incorreta");
    return;
}

localStorage.setItem(
    "usuarioLogado",
    JSON.stringify(usuario)
);

window.location.href = "index.html";
```

}
