function carregarContinuar(){

    const container = document.getElementById("continuarAssistindo");
    if(!container) return;

    const data = JSON.parse(localStorage.getItem("continuar"));

    if(!data){
        container.innerHTML = "<p>Nada assistido ainda</p>";
        return;
    }

    container.innerHTML = `
        <div class="card" onclick="irContinuar('${data.id}')">
            <div style="padding:10px">
                <h3>${data.titulo}</h3>
                <p>Retomar em ${Math.floor(data.tempo)}s</p>
            </div>
        </div>
    `;
}

function irContinuar(id){
    window.location.href = "episodio.html?id=" + id;
}

carregarContinuar();
