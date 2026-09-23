// Dimensões reais desta imagem (1024 de largura por 659 de altura)
const w = 1024;
const h = 659;

// Configuração do Leaflet para imagem plana
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1.5,
  maxZoom: 2,
  zoomSnap: 0.1
});

// [Y_min, X_min] até [Y_max, X_max]
// No Leaflet CRS.Simple: [0, 0] é canto inferior esquerdo, [h, w] é canto superior direito
const bounds = [[0, 0], [h, w]];
L.imageOverlay('./gm5ktxl3n08e1.png', bounds).addTo(map);
map.fitBounds(bounds);

// LOCAIS DE NAVARENE E BALUARTE (Coordenadas calibradas para esta imagem de 1024x659)
const locais = [
  {
    nome: "Charmonde",
    coord: [465, 385],
    resumo: "Capital de Navarene e lar da Rainha Armalu.",
    url: "cidades/charmonde.html"
  },
  {
    nome: "Bodrov",
    coord: [425, 292],
    resumo: "A impenetrável cidade no topo da Mesa de Pedra.",
    url: "cidades/bodrov.html"
  },
  {
    nome: "Shallamas",
    coord: [390, 307],
    resumo: "A Cidade dos Ecos, famosa pelas ilusões temporais do passado.",
    url: "cidades/shallamas.html"
  },
  {
    nome: "A Floresta Oeste",
    coord: [460, 205],
    resumo: "Lar do Imperador do Verde e das feras culovas.",
    url: "cidades/floresta-oeste.html"
  },
  {
    nome: "O Monólito Âmbar",
    coord: [515, 345],
    resumo: "Monólito colossal flutuante sagrado para a Ordem da Verdade.",
    url: "cidades/monolito-ambar.html"
  }
];

// Adiciona os marcadores no mapa
locais.forEach(loc => {
  const marker = L.marker(loc.coord).addTo(map);
  marker.bindPopup(`
    <div style="text-align: center;">
      <h3 style="margin: 0 0 5px; color: #c89b3c;">${loc.nome}</h3>
      <p style="margin: 0 0 10px; font-size: 0.9em;">${loc.resumo}</p>
      <a href="${loc.url}" style="display: inline-block; padding: 4px 10px; background: #c89b3c; color: #111; font-weight: bold; text-decoration: none; border-radius: 4px;">Ver Anotações &rarr;</a>
    </div>
  `);
});

// Clique em qualquer ponto com o F12 (Console) aberto para descobrir novas coordenadas:
map.on('click', function(e) {
  console.log(`[${Math.round(e.latlng.lat)}, ${Math.round(e.latlng.lng)}]`);
});
