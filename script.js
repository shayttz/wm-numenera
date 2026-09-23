// Dimensões reais em pixels da sua imagem do mapa (exemplo: 1000x1800)
// Ajuste se a sua imagem tiver outra resolução!
const w = 1000;
const h = 1800;

// Configuração do Leaflet para usar Sistema de Coordenadas Simples (Imagem plana)
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 1,
  zoomSnap: 0.25
});

const bounds = [[0, 0], [h, w]];
L.imageOverlay('mapa.jpg', bounds).addTo(map);
map.fitBounds(bounds);

// LOCAIS E COORDENADAS [Y (altura), X (largura)]
// Obs: Y vai de 0 (base) até 1800 (topo), X vai de 0 (esquerda) até 1000 (direita)
const locais = [
  {
    nome: "Charmonde",
    coord: [1350, 830], // Ajuste fino conforme o ponto da capital no mapa
    resumo: "Capital de Navarene e lar da Rainha Armalu.",
    url: "cidades/charmonde.html"
  },
  {
    nome: "Bodrov",
    coord: [1260, 520],
    resumo: "A impenetrável cidade no topo da Mesa de Pedra.",
    url: "cidades/bodrov.html"
  },
  {
    nome: "Shallamas",
    coord: [1210, 620],
    resumo: "A Cidade dos Ecos, famosa pelos ecos do passado.",
    url: "cidades/shallamas.html"
  },
  {
    nome: "A Floresta Oeste",
    coord: [1360, 360],
    resumo: "Lar do Imperador do Verde e das feras culovas.",
    url: "cidades/floresta-oeste.html"
  }
];

// Adiciona os marcadores no mapa
locais.forEach(loc => {
  const marker = L.marker(loc.coord).addTo(map);
  marker.bindPopup(`
    <h3>${loc.nome}</h3>
    <p>${loc.resumo}</p>
    <a href="${loc.url}">Ver Anotações &rarr;</a>
  `);
});

// DICA PARA DESCOBRIR AS COORDENADAS:
// Clique em qualquer lugar do mapa com o Console (F12) aberto para ver as coordenadas exatas
map.on('click', function(e) {
  console.log(`Coordenada clicada: [${Math.round(e.latlng.lat)}, ${Math.round(e.latlng.lng)}]`);
});
