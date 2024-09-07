function Pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-Pesquisa").value 

if(!campoPesquisa){
   section.innerHTML = "<p>Nada foi encontrado. Digite o produto </p>" 
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";
// Itera sobre cada dado da lista de dados
for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <img src="img/bottle1.jpg" alt="Garrafa Função Dupla">
                    <h2>${dado.titulo}</h2>
            <p class="descricao-meta"> <h3> ${dado.descricao} </h3> </p>
            <a href= ${dado.link} target="_blank"""> 
            <h3>Compre aqui</h3></a>
            </div>
        `;
    
        
       }
}
    if (!resultados) {
        resultados = "<p>Nada foi encontrado. Tente outra palavra</p>"
    }
    section.innerHTML = resultados;

    
}





