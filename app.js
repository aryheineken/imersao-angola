function buscar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
   if (campoPesquisa == "") {
    return

   }
    
// Inicializa uma string vazia para armazenar os resultados 
    let resultados = "";
let titulo ="";
let descricao ="";

// intera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
// se titulo includes campoPesquisa
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
 // cria um novo elemento
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados){
        resultados = "<p>Nada foi localizado</p>"

    }
    // Atualizar o HTML após o loop
    section.innerHTML = resultados;
}





 
