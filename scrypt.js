const apikey ='edd68ee2';
const frmPesquisa = document.querySelector("form");

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;
    if (pesquisa == "") {
        alert ('Preencha o campo!');
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector(".lista");
    lista.innerHTML = "";

    if(json.Response == 'False') {
        alert("Nenhum filme encontrado!");
        return;
    }

    json.Search.forEach(Element => {
        
        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${Element.Poster}" /><h2>${Element.Title}</h2>`

        lista.appendChild(item);
    });

}