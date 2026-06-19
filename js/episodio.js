const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const db = getDB();

const ep = db.episodios.find(e => e.id === id);

if(ep){

    const video = document.getElementById("player");

    video.src = ep.video;

    const key = "progress_" + id;

    video.currentTime = localStorage.getItem(key) || 0;

    video.addEventListener("timeupdate", () => {
        localStorage.setItem(key, video.currentTime);
    });

    video.addEventListener("pause", () => {

        localStorage.setItem("continuar", JSON.stringify({
            titulo: ep.titulo,
            id: ep.id,
            tempo: video.currentTime
        }));

    });
}
