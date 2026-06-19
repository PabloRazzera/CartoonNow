const DB_INICIAL = {
    series: [],
    episodios: []
};

/* INIT BANCO */
if(!localStorage.getItem("series")){
    localStorage.setItem("series", JSON.stringify(DB_INICIAL.series));
}

if(!localStorage.getItem("episodios")){
    localStorage.setItem("episodios", JSON.stringify(DB_INICIAL.episodios));
}

/* GET GLOBAL DB */
function getDB(){
    return {
        series: JSON.parse(localStorage.getItem("series")) || [],
        episodios: JSON.parse(localStorage.getItem("episodios")) || []
    };
}

/* UTIL GLOBAL */
function salvarDB(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}
