function adicionarMinhaLista(serie){

    let lista = JSON.parse(localStorage.getItem("minhaLista")) || [];

    const existe = lista.find(s => s.id === serie.id);

    if(!existe){
        lista.push(serie);
    }

    localStorage.setItem("minhaLista", JSON.stringify(lista));

    alert("Adicionado à Minha Lista!");
}

function assistir(id){

    localStorage.setItem("episodioAtual", id);

    window.location.href = "episodio.html?id=" + id;
}
