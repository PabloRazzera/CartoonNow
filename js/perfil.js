const usuario =
JSON.parse(
localStorage.getItem("usuarioLogado")
);

if(usuario){

```
document.getElementById(
    "nomeUsuario"
).innerText = usuario.nome;
```

}

/* MINHA LISTA */

const lista =
JSON.parse(
localStorage.getItem("minhaLista")
) || [];

const listaDiv =
document.getElementById("minhaLista");

lista.forEach(item => {

```
listaDiv.innerHTML += `
    <div class="item-perfil">
        ${item.nome}
    </div>
`;
```

});

/* CONTINUAR ASSISTINDO */

const nome =
localStorage.getItem("continuarNome");

const tempo =
localStorage.getItem("continuarTempo");

if(nome){

```
document.getElementById(
    "continuarAssistindo"
).innerHTML = `
    <div class="item-perfil">
        ${nome}
        <br>
        Tempo salvo: ${tempo}s
    </div>
`;
```

}

/* LOGOUT */

function logout(){

```
localStorage.removeItem(
    "usuarioLogado"
);

window.location.href =
    "login.html";
```

}
