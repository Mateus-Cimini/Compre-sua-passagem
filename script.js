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
