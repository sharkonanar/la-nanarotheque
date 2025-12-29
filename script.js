// 1. TA BASE DE DONNÉES (Ajoute tes nanars ici)
const videos = [
    {
        id: "hitman-le-cobra",
        titre: "Hitman le Cobra",
        resume: "Un doublage légendaire pour un film d'action aux répliques cultes.",
        image: "images/hitman.jpg",
        note: 5 // Nombre de têtes de mort (1 à 5)
    },
    {
        id: "shark-island",
        titre: "Mega Shark vs Giant Octopus",
        resume: "Un requin géant saute sur un avion. Du grand art nanar.",
        image: "images/shark.jpg",
        note: 4
    }
];

// 2. PARAMÈTRES
let pageActuelle = 1;
const videosParPage = 20;

function afficherVideos() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    grid.innerHTML = ""; 

    const debut = (pageActuelle - 1) * videosParPage;
    const fin = debut + videosParPage;
    const selection = videos.slice(debut, fin);

    // On remplace la tête de mort par le requin
let requins = "🦈".repeat(video.note || 0); 

// Et n'oublie pas de changer le nom dans le HTML juste en dessous :
card.innerHTML = `
    <div class="card-image">
        <img src="${video.image}" alt="">
    </div>
    <div class="card-content">
        <div>
            <div class="rating">${requins}</div> <h3>${video.titre}</h3>
            <p>${video.resume}</p>
        </div>
        <a href="video.html?id=${video.id}" class="btn-voir">VOIR LE NANAR</a>
    </div>
`;
        
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${video.image}" alt="">
            </div>
            <div class="card-content">
                <div>
                    <div class="rating">${têtes}</div>
                    <h3>${video.titre}</h3>
                    <p>${video.resume}</p>
                </div>
                <a href="video.html?id=${video.id}" class="btn-voir">VOIR LE NANAR</a>
            </div>
        `;
        grid.appendChild(card);
    });

    // Mise à jour de la pagination
    const infoPage = document.getElementById('page-info');
    if (infoPage) infoPage.innerText = `Page ${pageActuelle}`;
    
    document.getElementById('btn-prev').style.visibility = (pageActuelle === 1) ? "hidden" : "visible";
    document.getElementById('btn-next').style.visibility = (videos.length > fin) ? "visible" : "hidden";
}

// 3. ÉVÉNEMENTS
document.getElementById('btn-prev')?.addEventListener('click', () => {
    pageActuelle--;
    afficherVideos();
    window.scrollTo(0, 0);
});

document.getElementById('btn-next')?.addEventListener('click', () => {
    pageActuelle++;
    afficherVideos();
    window.scrollTo(0, 0);
});

// Lancement au démarrage
afficherVideos();
