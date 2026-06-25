const whatsappNumber = '5524981528704';

const perfumes = [
  {
    name: 'Club de Nuit Intense Man',
    brand: 'Armaf',
    image: 'club-de-nuit.jpg',
    price: 'R$ 45,00',
    description: 'Fragrância marcante, elegante e muito versátil. Ideal para quem busca presença, elogios e uma assinatura olfativa intensa.',
    family: 'Amadeirado / Cítrico',
    occasion: 'Dia, noite, encontros e ocasiões especiais',
    fixation: 'Alta',
    volume: 'Decant 10ml'
  },
  {
    name: 'Asad Bourbon',
    brand: 'Lattafa',
    image: 'asad-bourbon.jpg',
    price: 'R$ 45,00',
    description: 'Uma fragrância quente, intensa e sofisticada, perfeita para quem gosta de perfumes com personalidade e presença.',
    family: 'Oriental / Especiado',
    occasion: 'Noite, eventos e dias frios',
    fixation: 'Alta',
    volume: 'Decant 10ml'
  },
  {
    name: 'Rifaaqat',
    brand: 'Paris Corner',
    image: 'rifaaqat.jpg',
    price: 'R$ 49,90',
    description: 'Perfume refinado, envolvente e elegante. Uma escolha excelente para quem busca exclusividade e sofisticação.',
    family: 'Ambarado / Especiado',
    occasion: 'Trabalho, noite, jantar e ocasiões especiais',
    fixation: 'Alta',
    volume: 'Decant 10ml'
  }
];

const grid = document.getElementById('perfumeGrid');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

const modalImage = document.getElementById('modalImage');
const modalBrand = document.getElementById('modalBrand');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalFamily = document.getElementById('modalFamily');
const modalOccasion = document.getElementById('modalOccasion');
const modalFixation = document.getElementById('modalFixation');
const modalVolume = document.getElementById('modalVolume');
const whatsappButton = document.getElementById('whatsappButton');

perfumes.forEach((perfume, index) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${perfume.image}" alt="${perfume.name}">
    <div class="card-body">
      <p>${perfume.brand}</p>
      <h3>${perfume.name}</h3>
      <div class="card-meta"><span>${perfume.volume}</span><strong>${perfume.price}</strong></div>
      <span>Clique para ver detalhes</span>
    </div>
  `;
  card.addEventListener('click', () => openPerfume(index));
  grid.appendChild(card);
});

function openPerfume(index) {
  const perfume = perfumes[index];
  modalImage.src = perfume.image;
  modalBrand.textContent = perfume.brand;
  modalName.textContent = perfume.name + ' • ' + perfume.price;
  modalDescription.textContent = perfume.description;
  modalFamily.textContent = perfume.family;
  modalOccasion.textContent = perfume.occasion;
  modalFixation.textContent = perfume.fixation;
  modalVolume.textContent = perfume.volume;

  const message = encodeURIComponent(`Olá! Tenho interesse no decant de 10ml do ${perfume.name} por ${perfume.price}.`);
  whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${message}`;

  modal.classList.add('active');
}

closeModal.addEventListener('click', () => modal.classList.remove('active'));

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});
