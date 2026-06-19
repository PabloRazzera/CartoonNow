const DB_INICIAL = {
    series: [
        {
            id: "picapau",
            nome: "Pica-Pau",
            capa: "assets/capas/picapau.jpg",
            categoria: "Comédia",
            descricao: "Desenho clássico"
        }
    ],
    episodios: [
        {
            id: "ep1",
            serieId: "picapau",
            titulo: "Episódio 1",
            video: "assets/videos/ep1.mp4",
            duracao: "22 min"
        }
    ]
};

/* CRIA BANCO SE NÃO EXISTIR */
if(!localStorage.getItem("series")){
    localStorage.setItem("series", JSON.stringify(DB_INICIAL.series));
}

if(!localStorage.getItem("episodios")){
    localStorage.setItem("episodios", JSON.stringify(DB_INICIAL.episodios));
}

function getDB(){
    return {
        series: JSON.parse(localStorage.getItem("series")) || [],
        episodios: JSON.parse(localStorage.getItem("episodios")) || []
    };
}

function saveSeries(series){
    localStorage.setItem("series", JSON.stringify(series));
}

function saveEps(episodios){
    localStorage.setItem("episodios", JSON.stringify(episodios));
}
