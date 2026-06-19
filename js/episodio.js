const epId = new URLSearchParams(window.location.search).get("id");

const db = getDB();

const ep = db.episodios.find(e => e.id === epId);

const video = document.getElementById("player");

if(ep){

    video.src = ep.video;

    const key = "progress_" + ep.id;

    /* CARREGAR */
    video.currentTime = localStorage.getItem(key) || 0;

    /* SALVAR CONTÍNUO (NÍVEL PROFISSIONAL) */
    setInterval(() => {
        localStorage.setItem(key, video.currentTime);
    }, 2000);

    /* SALVAR AO SAIR */
    window.addEventListener("beforeunload", () => {
        localStorage.setItem(key, video.currentTime);
    });

    /* CONTINUAR ASSISTINDO GLOBAL */
    video.addEventListener("timeupdate", () => {

        localStorage.setItem("continuar", JSON.stringify({
            id: ep.id,
            titulo: ep.titulo,
            tempo: video.currentTime
        }));

    });
}
