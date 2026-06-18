function adicionarMinhaLista(){

```
let lista =
    JSON.parse(
        localStorage.getItem("minhaLista")
    ) || [];

lista.push({
    nome:"Pica-Pau",
    capa:"assets/capas/picapau.jpg"
});

localStorage.setItem(
    "minhaLista",
    JSON.stringify(lista)
);

alert("Adicionado à Minha Lista!");
```

}

function assistir(id){

```
localStorage.setItem(
    "episodioAtual",
    id
);

window.location.href =
    "episodio.html";
```

}
