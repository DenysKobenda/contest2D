const images = [
    { src: 'assets/img/sadiba.png', caption: 'Садиба М.І.Пирогова' },
    { src: 'assets/img/vezha_artinova.png', caption: 'Вежа Артинова' },
    { src: 'assets/img/televiziyna_vezha.png', caption: 'Вінницька телевежа' },
    { src: 'assets/img/avtovokzal.png', caption: 'Східний автовокзал' },
    { src: 'assets/img/arka.png', caption: 'Вінницька арка' },
    { src: 'assets/img/mig_15.png', caption: "Пам`ятник МіГ-15" },
    { src: 'assets/img/roshen.png', caption: 'Фабрика ROSHEN' },
    { src: 'assets/img/liverpool.png', caption: 'Площа Ліверпуль' },
    { src: 'assets/img/stomatolog.png', caption: "Пам'ятник стоматологам" },
    { src: 'assets/img/lvovich.png', caption: 'Особняк Львовича' }
];

const imageContainer = document.getElementById('image-container');

images.forEach(image => {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption;

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = image.caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    imageContainer.appendChild(figure);
});
