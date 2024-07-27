// Seleciona os elementos dos inputs
const cidadeOrigem = document.getElementById("location");
const cidadeDestino = document.getElementById("destination");

// Adiciona evento para salvar no localStorage quando o valor mudar
cidadeOrigem.addEventListener('change', function() {
    localStorage.setItem("cidadeOrigem", this.value);
});

cidadeDestino.addEventListener('change', function() {
    localStorage.setItem("cidadeDestino", this.value);
});

// Recupera e define os valores dos inputs ao carregar a página
window.onload = function() {
    const savedOrigem = localStorage.getItem('cidadeOrigem');
    const savedDestino = localStorage.getItem('cidadeDestino');
    
    if (savedOrigem) {
        cidadeOrigem.value = savedOrigem;
    }
    if (savedDestino) {
        cidadeDestino.value = savedDestino;
    }
}

const getCidades = async () => {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    const data = await response.json();
    return data.map(cidades => cidades.nome);
};

$(document).ready(async function() {
    const cidades = await getCidades();

    $('#location').autocomplete({
        source: cidades
    });

    $('#destination').autocomplete({
        source: cidades
    });
});


const tags = document.querySelectorAll('.tag');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');

const cityImages = {
    rio: ['/paisagens/rio1.jpg', '/paisagens/rio2.webp', '/paisagens/rio3.jpg'],
    sp: ['/paisagens/sp1.jpg', '/paisagens/sp2.jpg', '/paisagens/sp3.webp'],
    buzios: ['/paisagens/buzios1.webp', '/paisagens/buzios2.webp', '/paisagens/buzios3.webp'],
    bh: ['/paisagens/bh1.jpeg', '/paisagens/bh2.jpeg', '/paisagens/bh3.jpeg'],
    floripa: ['/paisagens/floripa1.jpg', '/paisagens/floripa2.jpg', '/paisagens/floripa3.jpg'],
    foz: ['/paisagens/fox1.webp', '/paisagens/fox2.webp', '/paisagens/fox3.webp'],
    manaus: ['/paisagens/manaus1.jpg', '/paisagens/manaus2.jpg', '/paisagens/manaus3.jpg'],
    salvador: ['/paisagens/salvador1.webp', '/paisagens/salvador2.webp', '/paisagens/salvador3.webp'],
};

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        const city = tag.getAttribute('data-city');
        if (cityImages[city]) {
            const images = cityImages[city];
            image1.src = images[0];
            image2.src = images[1];
            image3.src = images[2];
        } else {
            console.error(`City '${city}' not found in cityImages.`);
        }
    });
});
