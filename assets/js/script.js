const images = [
    { src: 'assets/img/sadiba.png', caption: 'Садиба М.І.Пирогова', description: 'У південно-західній частині Вінниці є музей-садиба Миколи Івановича Пирогова — видатного лікаря і вченого, творця воєнно-польової хірургії, педагога і громадського діяча. Чверть століття М. Пирогов жив і працював в Україні. У 1861 р., подавши у відставку з посади попечителя Київського навчального округу, Микола Іванович оселився в садибі Вишня, де пройшли останні двадцять років його життя. Тут він продовжував активну наукову і громадську діяльність, зокрема створив першу на Поділлі сільську лікарню та збудував аптеку, де за рецептом з позначкою «для бідного» ліки відпускалися безкоштовно.' },
    { src: 'assets/img/vezha_artinova.png', caption: 'Вежа Артинова', description: 'Понад сторічна вежа Артинова — справжня перлина в намисті принад Вінниці.За різних часів вона виконувала різні функції: водонапірної вежі, пожежної каланчі, навіть квартирного будинку. Нині тут розташований Музей пам’яті воїнів Вінниччини. Як і сто років тому годинник на Вежі сповіщає містянам точний час. Особливо привабливою стає вежа з настанням сутінок, коли запалює свої ошатні вогні.' },
    { src: 'assets/img/televiziyna_vezha.png', caption: 'Вінницька телевежа', description: 'Вінницька радіотелевізійна вежа – це металева труба, діаметром близько двох метрів зі спеціальної сталі. Всередині труби знаходиться ліфт, який робить вісім зупинок і піднімається на висоту 309 метрів.' },
    { src: 'assets/img/avtovokzal.png', caption: 'Східний автовокзал', description: 'Автовокзал “Вінниця-2“ – автовокзал Вінниці розташований по вул. Хмельницьке шосе 107. З автовокзалу відправляються регулярні автобусні рейси за кордон та по Україні.' },
    { src: 'assets/img/arka.png', caption: 'Вінницька арка', description: 'Вінницька арка — один із символів міста Вінниці. Вона веде до центрального парку ім. Леонтовича та розташована на площі Калічанській, що знаходиться у центрі міста.' },
    { src: 'assets/img/mig_15.png', caption: "Пам'ятник МіГ-15", description: 'Пам\'ятник льотчикам-визволителям перед проспектом Космонавтів. Пам\'ятник з літаком відкрили в 1969 році, на урочистостях був льотчик, космонавт Георгій Береговий. Саме його ескадрилья звільняла місто від німецьких загарбників у 1944 році.' },
    { src: 'assets/img/roshen.png', caption: 'Фабрика ROSHEN', description: 'На сьогоднішній день, Вінницька кондитерська фабрика входить до п\'ятірки найбільших кондитерських підприємств України, асортимент фабрики налічує понад 100 найменувань кондитерських виробів, загальним обсягом близько 100 тис. тонн на рік.' },
    { src: 'assets/img/liverpool.png', caption: 'Площа Ліверпуль', description: 'На День міста Вінниці у 2017 році відкрили оновлену площу з інсталяцією, присвячену легендарній «чудовій четвірці» – британському гурту The Beatles. Відтоді Джон Леннон, Пол Маккартні, Джордж Харрісон та Рінго Старр зустрічають вінничан та туристів у центрі міста на фоні свого знаменитого жовтого підводного човна.' },
    { src: 'assets/img/stomatolog.png', caption: "Пам'ятник стоматологам", description: 'На перехресті вулиць Архітектора Артинова і вулиці Грушевського розміщений пам\'ятник стоматологу. Це спільне виробництво колективу стоматологічної клініки - лікарі розробили проект і покликали слюсаря, який зробив цікаву скульптуру.' },
    { src: 'assets/img/lvovich.png', caption: 'Особняк Львовича', description: 'Збудована для одного з найбагатших вінничан свого часу, садиба на сучасній вулиці Петлюри використовувалась як приміщення для Міністерства пошт і телеграфів УНР. А трохи пізніше в ній протягом короткого періоду часу працював Симон Петлюра.' }
];

const imageContainer = document.getElementById('image-container');
const tooltip = document.getElementById('tooltip');

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

    figure.addEventListener('mouseenter', () => {
        tooltip.textContent = image.description;
        tooltip.style.display = 'block';
    });

    figure.addEventListener('mousemove', (event) => {
        tooltip.style.left = `${event.pageX + 15}px`;
        tooltip.style.top = `${event.pageY + 15}px`;
    });

    figure.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });    
});

const gifElement = document.querySelector('.gif');

    gifElement.addEventListener('mouseenter', (event) => {
        const description = gifElement.getAttribute('data-description');
        tooltip.textContent = description;
        tooltip.style.display = 'block';
    });

    gifElement.addEventListener('mousemove', (event) => {
        tooltip.style.left = `${event.pageX + 15}px`;
        tooltip.style.top = `${event.pageY + 15}px`;
    });

    gifElement.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
