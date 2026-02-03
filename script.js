const agents = [
    { name: "JETT", img: "img/jett.png", role: "Duelist" },
    { name: "PHOENIX", img: "img/Phoenix.png", role: "Duelist" },
    { name: "SAGE", img: "img/Raze.png", role: "Sentinel" },
    { name: "SOVA", img: "img/Sova.png", role: "Initiator" },
    { name: "OMEN", img: "img/Omen.png", role: "Controller" },
    { name: "REYNA", img: "img/Reyna.png", role: "Duelist" },
    { name: "RAZE", img: "img/Raze.png", role: "Duelist" },
    { name: "CYPHER", img: "img/Sypher.png", role: "Sentinel" },
    { name: "VIPER", img: "img/Viper.png", role: "Controller" },
    { name: "BRIMSTONE", img: "img/Brimstone.png", role: "Controller" }
];

let currentIndex = 0;

// Elements
const imgElement = document.getElementById('agentImg');
const nameElement = document.getElementById('agentName');
const counterElement = document.getElementById('charCounter'); // New element

function updateGallery() {
    // Add a quick fade effect
    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        imgElement.src = agents[currentIndex].img;
        nameElement.textContent = agents[currentIndex].name;
        counterElement.textContent = `${currentIndex + 1} / ${agents.length}`;
        imgElement.style.opacity = 1;
    }, 200);
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % agents.length;
    updateGallery();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + agents.length) % agents.length;
    updateGallery();
});

// Initialize first character
updateGallery();