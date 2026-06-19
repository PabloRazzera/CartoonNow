function adicionarMinhaLista(serie){

    let lista = JSON.parse(localStorage.getItem("minhaLista")) || [];

    if(!lista.find(s => s.id === serie.id)){
        lista.push(serie);
    }

    localStorage.setItem("minhaLista", JSON.stringify(lista));
}
