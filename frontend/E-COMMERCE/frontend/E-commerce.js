//Criado uma constante Itens ou produtos do E-COMMERCE

const BolosFesta = [
  //Objetos Criados
  {
    id: 0,
    nome: "Bolo Festa -1",
    Preco: "R$" + 80 + ",00",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-bolo-decorado-1.jpg",
    quantidade: 0,
  },
  /////////////////////
  {
    id: 1,
    nome: "Bolo Festa -2",
    Preco: "R$" + 100 + ",00",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-bolo-decorado-2.jpg",
    quantidade: 0,
  },
  /////////////////////
  {
    id: 2,
    nome: "Bolo Festa -3",
    Preco: "R$" + 120 + ",00",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-bolo-decorado-5.jpg",
    quantidade: 0,
  },
];

// Função Inicializar Loja
inicializarLoja = () => {
  //array function
  let containerProdutos = document.getElementById("produtos");
  BolosFesta.map((val) => {
    //mapeamento dos itens em array com os Produtos do //E-commerce
    containerProdutos.innerHTML +=
      `

     <div class="produto-single">
     <img src="` +
      val.img +
      `" />
     <p>` +
      val.nome +
      "<br>" +
      val.Preco +
      `</p>
     <a key="` +
      val.id +
      `" href="#">Adicionar ao Carrinho</a>
    </div>
    
    `;
    //console.log(val.nome);
  });
};

inicializarLoja();

//Função Atualizar carrinho
atualizarCarrinho = () => {
  let containerCarrinho = document.getElementById("carrinho");
  containerCarrinho.innerHTML = "";
  BolosFesta.map((val) => {
    //mapeamento dos itens em array com os Produtos do //E-commerce
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
     
     <p>` +
        val.nome +
        ` | quantidade: ` +
        val.quantidade +
        ` | Preço: ` +
        val.Preco +
        `</p>
      <hr>
    
    `;
    }
  });
};

let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    BolosFesta[key].quantidade++;
    atualizarCarrinho();
    return false;
  });
}
