function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
      section.innerHTML = "<p>Nenhum resultado encontrado</p>"
      return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    //Inicializa uma string vazia para armazenar os resultados
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        // Constrói o HTML para cada resultado, incluindo: Um título com um link para a rede social, Uma descrição, Um link para mais informações
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.redeSocial}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
      `;
      }
     
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado</p>"
    }
  
  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}