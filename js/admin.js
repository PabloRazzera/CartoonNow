function adicionarSerie(){

```
let series =
JSON.parse(localStorage.getItem("series")) || [];

const nome =
document.getElementById("serieNome").value;

const capa =
document.getElementById("serieCapa").value;

series.push({
    nome,
    capa
});

localStorage.setItem(
    "series",
    JSON.stringify(series)
);

alert("Série adicionada!");
```

}

function adicionarEpisodio(){

```
let eps =
JSON.parse(localStorage.getItem("episodios")) || [];

const serie =
document.getElementById("epSerie").value;

const nome =
document.getElementById("epNome").value;

const video =
document.getElementById("epVideo").value;

eps.push({
    serie,
    nome,
    video
});

localStorage.setItem(
    "episodios",
    JSON.stringify(eps)
);

alert("Episódio adicionado!");
```

}
