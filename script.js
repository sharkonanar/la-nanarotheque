// 1. TA BASE DE DONNÉES
const videos = [
    {
        id: "video2",
        titre: "Manoir Hanté du Blackwood",
        resume: "Exploration nocturne dans l'une des demeures les plus redoutées.",
        image: "https://via.placeholder.com/400x225/333/fff",
        urlVideo: "Lien_Video_2"
    },
    {
        id: "lemonstredulochness",
        titre: "Le Monstre du Loch Ness",
        resume: "Le monstre de ce fameux lac ne cesse de faire parler de lui... Enquête sur ce cryptide",
        image: "images/nessie.jpg",
        urlVideo: "https://www.youtube.com/embed/axESWHUrHw4"
    }
    // Quand tu ajoutes une vidéo, mets-la TOUJOURS en haut de la liste pour qu'elle soit la 1ère
];

// 2. PARAMÈTRES DE LA PAGE
let pageActuelle = 1;
const videosParPage = 20;

function afficherVideos() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    grid.innerHTML = ""; // Vide la grille avant d'afficher

    // Calcul du début et de la fin pour la page
    const debut = (pageActuelle - 1) * videosParPage;
    const fin = debut + videosParPage;
    
    // On sélectionne les 20 vidéos de la page en cours
    const selection = videos.slice(debut, fin);

    // Génération du HTML
    selection.forEach(video => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${video.image}" alt="">
            </div>
            <div class="card-content">
                <div>
                    <h3>${video.titre}</h3>
                    <p>${video.resume}</p>
                </div>
                <a href="video.html?id=${video.id}" class="btn-voir">VOIR LA VIDÉO</a>
            </div>
        `;
        grid.appendChild(card);
    });

    // 3. GESTION DES BOUTONS DE NAVIGATION
    const infoPage = document.getElementById('page-info');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (infoPage) infoPage.innerText = `Page ${pageActuelle}`;

    // Bouton Précédent : invisible si on est page 1
    if (btnPrev) {
        btnPrev.style.visibility = (pageActuelle === 1) ? "hidden" : "visible";
    }

    // Bouton Suivant : invisible s'il n'y a plus de vidéos après
    if (btnNext) {
        btnNext.style.visibility = (videos.length > fin) ? "visible" : "hidden";
    }
}

// 4. ÉVÉNEMENTS DES BOUTONS
document.getElementById('btn-prev')?.addEventListener('click', () => {
    pageActuelle--;
    afficherVideos();
    window.scrollTo(0, 0); // Remonte en haut de la page
});

document.getElementById('btn-next')?.addEventListener('click', () => {
    pageActuelle++;
    afficherVideos();
    window.scrollTo(0, 0); // Remonte en haut de la page
});

// Lancer l'affichage au chargement
afficherVideos();
