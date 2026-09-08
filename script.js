const player = document.getElementById("player");
const videoPlayer = document.getElementById("videoPlayer");


// ABRIR VÍDEO

function assistir(video) {

    videoPlayer.src = "videos/" + video;

    player.style.display = "flex";

    videoPlayer.play();
}


// FILME DESTAQUE

function assistirDestaque() {

    assistir("filme_1.mp4");

}


// FECHAR PLAYER

function fecharPlayer() {

    videoPlayer.pause();

    videoPlayer.src = "";

    player.style.display = "none";

}


// FECHAR CLICANDO FORA DO VÍDEO

player.addEventListener("click", function(event) {

    if (event.target === player) {
        fecharPlayer();
    }

});


// ESC PARA FECHAR

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        fecharPlayer();
    }

});
