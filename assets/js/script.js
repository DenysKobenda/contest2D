const images = [
    { src: 'assets/img/1.png', caption: 'Садиба М.І.Пирогова' },
    { src: 'assets/img/2.png', caption: 'Вежа Артинова' },
    { src: 'assets/img/3.png', caption: 'Вінницька телевежа' },
    { src: 'assets/img/4.png', caption: 'Східний автовокзал' },
    { src: 'assets/img/5.png', caption: 'Вінницька арка' },
    { src: 'assets/img/6.png', caption: "Пам`ятник МіГ-15" },
    { src: 'assets/img/7.png', caption: 'Фабрика ROSHEN' },
    { src: 'assets/img/8.png', caption: 'Площа Ліверпуль' },
    { src: 'assets/img/9.png', caption: "Пам'ятник стоматологам" },
    { src: 'assets/img/10.png', caption: 'Особняк Львовича' }
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
