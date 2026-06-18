const video = document.getElementById("player");
const speed = document.getElementById("speed");

/* SALVAR PROGRESSO */

video.addEventListener("timeupdate", () => {

```
localStorage.setItem(
    "progresso_ep1",
    video.currentTime
);
```

});

/* CARREGAR PROGRESSO */

window.addEventListener("load", () => {

```
const tempo =
    localStorage.getItem("progresso_ep1");

if(tempo){

    video.currentTime = tempo;

}
```

});

/* VELOCIDADE */

speed.addEventListener("change", () => {

```
video.playbackRate = speed.value;
```

});

/* CONTINUAR ASSISTINDO */

video.addEventListener("pause", () => {

```
localStorage.setItem("continuarNome", "Pica-Pau");

localStorage.setItem(
    "continuarTempo",
    Math.floor(video.currentTime)
);
```

});

/* NAVEGAÇÃO */

function proximoEpisodio(){

```
alert("Próximo episódio");
```

}

function episodioAnterior(){

```
alert("Episódio anterior");
```

}
