function salvarHistorico(ep){

    let hist = JSON.parse(localStorage.getItem("historico")) || [];

    hist.push({
        id: ep.id,
        titulo: ep.titulo,
        data: new Date().toLocaleString()
    });

    localStorage.setItem("historico", JSON.stringify(hist));
}
