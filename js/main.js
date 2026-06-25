
const whatsappNumber = "5524981528704";
const instagramUrl = "https://www.instagram.com/noxparfum_/";

async function loadPerfumes(){
  const response = await fetch("data/perfumes.json");
  return await response.json();
}

function createCard(perfume){
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <div class="card-img">
      <img src="${perfume.imagem}" alt="${perfume.nome}" loading="lazy">
    </div>
    <div class="card-body">
      <span class="card-brand">${perfume.marca}</span>
      <h3>${perfume.nome}</h3>
      <p>${perfume.volume}</p>
      <strong class="price">R$ ${perfume.preco}</strong>
      <a class="btn btn-gold" href="${perfume.pagina}">Ver detalhes</a>
    </div>
  `;
  return article;
}

loadPerfumes().then(perfumes => {
  const grid = document.querySelector("#catalogoGrid");
  if(grid){
    perfumes.forEach(perfume => grid.appendChild(createCard(perfume)));
  }
});
