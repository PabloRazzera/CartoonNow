function carregarHome(){

    const db = getDB();
    const container = document.querySelector(".row");

    if(!container) return;

    container.innerHTML = "";

    db.series.forEach(s => {

        container.innerHTML += `
            <div class="card" onclick="abrirSerie('${s.id}')">
                <img src="${s.capa}">
                <span>${s.nome}</span>
            </div>
        `;
    });
}

function abrirSerie(id){
    window.location.href = "serie.html?id=" + id;
}

carregarHome();
