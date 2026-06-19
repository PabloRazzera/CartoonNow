function carregarContinuar(){

    const container = document.getElementById("continuarAssistindo");
    if(!container) return;

    const data = JSON.parse(localStorage.getItem("continuar"));

    if(!data){
        container.innerHTML = "<p>Nada assistido</p>";
        return;
    }

    container.innerHTML = `
        <div class="card" onclick="ir('${data.id}')">
            <h3>${data.titulo}</h3>
            <p>Retomar em ${Math.floor(data.tempo)}s</p>
        </div>
    `;
}

function ir(id){
    window.location.href = "episodio.html?id=" + id;
}

carregarContinuar();
