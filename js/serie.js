const id = new URLSearchParams(window.location.search).get("id");

function carregarSerie(){

    const db = getDB();

    const serie = db.series.find(s => s.id === id);
    if(!serie) return;

    document.querySelector(".serie-info h1").innerText = serie.nome;
    document.querySelector(".serie-capa").src = serie.capa;

    const eps = db.episodios.filter(e => e.serieId === id);

    const container = document.querySelector(".temporadas");
    container.innerHTML = "<h2>Episódios</h2>";

    eps.forEach(e => {

        container.innerHTML += `
            <div class="episodio">
                <div>
                    <h3>${e.titulo}</h3>
                </div>

                <button onclick="assistir('${e.id}')">
                    Assistir
                </button>
            </div>
        `;
    });
}

function assistir(epId){
    window.location.href = "episodio.html?id=" + epId;
}

carregarSerie();
