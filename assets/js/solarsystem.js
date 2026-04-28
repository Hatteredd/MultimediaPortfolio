// jshint esversion: 6
const planetaryData = [
    {
        id: "sun",
        name: "Sun",
        shortName: "SUN",
        type: "G-TYPE MAIN SEQUENCE · OUR STAR",
        age: "4.6B",
        period: "225M",
        distance: "0",
        description: "The Sun is a colossal nuclear furnace at the heart of our solar system, fusing hydrogen into helium and radiating energy that drives all life on Earth.",
        color: "#ffb400",
        icon: "../images/Sun.webp",
        video: "./videos/sun.mp4",
        ratio: null,
        sizeLabel: "109x",
        sizePercent: 100,
        isStar: true
    },
    {
        id: "mercury",
        name: "Mercury",
        shortName: "MER",
        type: "TERRESTRIAL PLANET · IRON RICH",
        age: null,
        period: "88 Earth days",
        distance: "57.9M km",
        description: "Mercury is the closest planet to the Sun and the smallest in the solar system. It has a rocky, heavily cratered surface that looks similar to Earth's Moon and no significant atmosphere, which means it cannot trap heat. Because of this, temperatures swing extremely—from very hot during the day to freezing cold at night.",
        color: "#8c8c8c",
        icon: "../images/Mercury.webp",
        video: "./videos/Mercury.mp4",
        ratio: 0.240846,
        sizeLabel: "38%",
        sizePercent: 38
    },
    {
        id: "venus",
        name: "Venus",
        shortName: "VEN",
        type: "TERRESTRIAL PLANET · TOXIC ATMOSPHERE",
        age: null,
        period: "225 Earth days",
        distance: "108.2M km",
        description: "Venus is often called Earth's 'sister planet' because of its similar size and structure, but its environment is extremely hostile. It has a thick atmosphere made mostly of carbon dioxide with clouds of sulfuric acid, creating a strong greenhouse effect that makes it the hottest planet in the solar system. Its surface is dry, volcanic, and under crushing atmospheric pressure.",
        color: "#e3bb76",
        icon: "../images/Venus.webp",
        video: "./videos/Venus.mp4",
        ratio: 0.61519726,
        sizeLabel: "95%",
        sizePercent: 95
    },
    {
        id: "earth",
        name: "Earth",
        shortName: "EAR",
        type: "TERRESTRIAL PLANET · HABITABLE ZONE",
        age: null,
        period: "365.25 Earth days",
        distance: "149.6M km",
        description: "Earth is the only known planet that supports life. It has liquid water on its surface, a breathable atmosphere rich in nitrogen and oxygen, and a stable climate system. Its protective magnetic field and ozone layer help shield life from harmful solar radiation.",
        color: "#2271b3",
        icon: "../images/Earth.webp",
        video: "./videos/Earth.mp4",
        ratio: 1,
        sizeLabel: "100%",
        sizePercent: 100
    },
    {
        id: "mars",
        name: "Mars",
        shortName: "MAR",
        type: "TERRESTRIAL PLANET · RED WORLD",
        age: null,
        period: "687 Earth days",
        distance: "227.9M km",
        description: "Mars is known as the Red Planet because of iron oxide (rust) covering its surface. It is a cold desert world with the largest volcano in the solar system and deep canyons. Evidence suggests it once had rivers and lakes, making it a strong candidate for past microbial life.",
        color: "#c1440e",
        icon: "../images/Mars.webp",
        video: "./videos/Mars.mp4",
        ratio: 1.8808158,
        sizeLabel: "53%",
        sizePercent: 53
    },
    {
        id: "jupiter",
        name: "Jupiter",
        shortName: "JUP",
        type: "GAS GIANT · KING OF PLANETS",
        age: null,
        period: "4,333 Earth days",
        distance: "778.6M km",
        description: "Jupiter is the largest planet in the solar system and is made mostly of hydrogen and helium. It has a massive storm called the Great Red Spot, which has lasted for centuries. Its strong gravity and magnetic field influence many surrounding moons and space debris.",
        color: "#d39c7e",
        icon: "",
        ratio: 11.862615,
        sizeLabel: "11x",
        sizePercent: 100
    },
    {
        id: "saturn",
        name: "Saturn",
        shortName: "SAT",
        type: "GAS GIANT · RINGED WORLD",
        age: null,
        period: "10,759 Earth days",
        distance: "1.4B km",
        description: "Saturn is famous for its bright, wide ring system made of ice and rock particles. It is a gas giant composed mainly of hydrogen and helium and has many moons, some of which are very interesting for scientific study, like Titan with its thick atmosphere.",
        color: "#c5ab6e",
        icon: "",
        ratio: 29.447498,
        sizeLabel: "9x",
        sizePercent: 90
    },
    {
        id: "uranus",
        name: "Uranus",
        shortName: "URA",
        type: "ICE GIANT · TILTED WORLD",
        age: null,
        period: "30,687 Earth days",
        distance: "2.9B km",
        description: "Uranus is an ice giant with a bluish color caused by methane in its atmosphere. It is unique because it rotates on its side, likely due to a massive collision in the past. It has a very cold atmosphere and faint ring system.",
        color: "#bbe1e4",
        icon: "",
        ratio: 84.016846,
        sizeLabel: "4x",
        sizePercent: 40
    },
    {
        id: "neptune",
        name: "Neptune",
        shortName: "NEP",
        type: "ICE GIANT · WINDY WORLD",
        age: null,
        period: "60,190 Earth days",
        distance: "4.5B km",
        description: "Neptune is the farthest planet from the Sun and is known for its deep blue color and extremely strong winds—the fastest in the solar system. It is an ice giant with a dynamic atmosphere and occasional massive storms, showing that it is still an active planet despite its distance.",
        color: "#6081ff",
        icon: "",
        ratio: 164.79132,
        sizeLabel: "4x",
        sizePercent: 39
    },
    {
        id: "pluto",
        name: "Pluto",
        shortName: "PLU",
        type: "DWARF PLANET · DISTANT WORLD",
        age: null,
        period: "90,560 Earth days",
        distance: "5.9B km",
        description: "Pluto, a distant Kuiper Belt world, shows layered geology, frozen nitrogen plains, and a surprisingly active relationship with its largest moon, Charon.",
        color: "#4a4a4a",
        icon: "",
        ratio: 248.09,
        sizeLabel: "0.18x",
        sizePercent: 2
    }
];

let currentPlanetIndex = 0;

function initSolarSystem() {
    renderSidebar();
    renderSizeComparison();
    updateOrbitalData();

    const ageInput = document.getElementById('earthAgeInput');
    if (ageInput) {
        ageInput.addEventListener('input', updateOrbitalData);
        ageInput.addEventListener('keypress', function(e) {
            if (e.key === '-' || e.key === 'e' || e.key === 'E') {
                e.preventDefault();
            }
        });
    }
}

function renderSidebar() {
    const sidebar = document.getElementById('planetSidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '';
    
    planetaryData.forEach((planet, index) => {
        const item = document.createElement('div');
        item.className = `planet-nav-item ${index === currentPlanetIndex ? 'active' : ''}`;
        item.onclick = () => selectPlanet(index);
        
        let iconHtml = '';
        if (planet.icon) {
            iconHtml = `<img src="${planet.icon}" alt="${planet.name}" onerror="this.parentElement.innerHTML='<div class=\'placeholder-dot\'></div>'">`;
        } else {
            iconHtml = `<div class="placeholder-dot" style="background: ${planet.color}"></div>`;
        }

        item.innerHTML = `
            <div class="planet-icon">
                ${iconHtml}
            </div>
            <span class="planet-label">${planet.shortName}</span>
        `;
        sidebar.appendChild(item);
    });
}

function renderSizeComparison() {
    const list = document.getElementById('sizeComparisonList');
    if (!list) return;
    list.innerHTML = '';

    planetaryData.forEach((planet, index) => {
        const item = document.createElement('div');
        item.className = `comparison-item ${index === currentPlanetIndex ? 'active' : ''}`;
        item.innerHTML = `
            <span class="comp-label">${planet.shortName}</span>
            <div class="comp-bar-bg">
                <div class="comp-bar-fill" style="width: ${planet.sizePercent}%"></div>
            </div>
            <span class="comp-value">${planet.sizeLabel}</span>
        `;
        list.appendChild(item);
    });
}

function selectPlanet(index) {
    currentPlanetIndex = index;
    renderSidebar();
    renderSizeComparison();
    updateOrbitalData();
}

function nextPlanet() {
    currentPlanetIndex = (currentPlanetIndex + 1) % planetaryData.length;
    selectPlanet(currentPlanetIndex);
}

function prevPlanet() {
    currentPlanetIndex = (currentPlanetIndex - 1 + planetaryData.length) % planetaryData.length;
    selectPlanet(currentPlanetIndex);
}

function updateOrbitalData() {
    const planet = planetaryData[currentPlanetIndex];
    const ageInput = document.getElementById('earthAgeInput');
    const validationMsg = document.getElementById('validationMsg');
    
    if (!ageInput || !validationMsg) return;

    const rawValue = ageInput.value;
    const earthAge = parseFloat(rawValue);
    const hasValue = rawValue !== "";
    
    ageInput.classList.remove('invalid');
    validationMsg.classList.remove('visible');

    let isValid = true;
    if (hasValue) {
        if (isNaN(earthAge) || earthAge < 0) {
            isValid = false;
            ageInput.classList.add('invalid');
            validationMsg.innerText = earthAge < 0 ? "No negatives" : "Invalid input";
            validationMsg.classList.add('visible');
        }
    }

    const mainName = document.getElementById('planetMainName');
    const typeElem = document.getElementById('planetType');
    const descElem = document.getElementById('planetDescription');
    
    if (mainName) mainName.innerText = planet.name;
    if (typeElem) typeElem.innerText = planet.type;
    if (descElem) descElem.innerText = planet.description;
    
    const visual = document.getElementById('planetVisual');
    if (visual) {
        visual.style.background = 'none';
        if (planet.video && planet.video !== "") {
            const timestamp = Date.now();
            visual.innerHTML = `
                <video autoplay loop muted playsinline poster="${planet.icon || ''}">
                    <source src="${planet.video}?v=${timestamp}" type="video/mp4">
                </video>
            `;
        } else if (planet.icon && planet.icon !== "") {
            visual.innerHTML = `<img src="${planet.icon}" alt="${planet.name}" onerror="this.parentElement.innerHTML='<div class=\'visual-placeholder\' style=\'background:${planet.color}\'></div>'">`;
        } else {
            visual.innerHTML = `<div class="visual-placeholder" style="background: ${planet.color}"></div>`;
        }
    }

    const hostStarBadge = document.getElementById('hostStarBadge');
    if (hostStarBadge) hostStarBadge.style.display = planet.isStar ? 'block' : 'none';

    const dataAge = document.getElementById('dataAge');
    if (dataAge) dataAge.innerHTML = planet.age || `4.6B <span>years</span>`;
    
    const dataPeriod = document.getElementById('dataPeriod');
    if (dataPeriod) dataPeriod.innerHTML = planet.period === 'N/A' ? '-' : planet.period;
    
    let displayRevs = '-';
    if (planet.ratio) {
        displayRevs = (1 / planet.ratio).toFixed(4);
    }
    const dataRevolutions = document.getElementById('dataRevolutions');
    if (dataRevolutions) dataRevolutions.innerText = displayRevs;
    
    const dataDistance = document.getElementById('dataDistance');
    if (dataDistance) dataDistance.innerText = planet.distance;

    const resultLabel = document.getElementById('resultLabel');
    const resultValue = document.getElementById('resultValue');
    const resultContext = document.getElementById('resultContext');

    if (resultLabel) resultLabel.innerText = `YOUR AGE ON ${planet.name.toUpperCase()}`;

    if (isValid && hasValue) {
        if (resultContext) resultContext.innerText = `Based on ${earthAge} Earth years`;
        if (planet.ratio) {
            const planetAge = (earthAge / planet.ratio).toFixed(2);
            if (resultValue) resultValue.innerText = planetAge;
        } else if (!planet.ratio && !planet.isStar) {
            if (resultValue) resultValue.innerText = earthAge;
        } else {
            if (resultValue) resultValue.innerText = "-";
        }
    } else {
        if (resultContext) resultContext.innerText = !isValid ? "Fix input to calculate" : "Enter your Earth age to calculate";
        if (resultValue) resultValue.innerText = "-";
    }
}

document.addEventListener('DOMContentLoaded', initSolarSystem);
