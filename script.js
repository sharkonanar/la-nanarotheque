// TA BASE DE DONNÉES (Ajoute tes vidéos ici)
const videos = [
    {
        id: "lemonstredulochness",
        titre: "Le Monstre du Loch Ness",
        resume: "Le monstre de ce fameux lac ne cesse de faire parler de lui... Enquête sur ce cryptide",
        image: "images/nessie.jpg",
        urlVideo: "https://www.youtube.com/embed/axESWHUrHw4" // Exemple YouTube
    },
    {
        id: "video2",
        titre: "Manoir Hanté du Blackwood",
        resume: "Exploration nocturne dans l'une des demeures les plus redoutées.",
        image: "https://via.placeholder.com/400x225/333/fff",
        urlVideo: "Lien_Video_2"
    }
];

// FONCTION POUR AFFICHER LES CASES
const grid = document.getElementById('video-grid');

videos.forEach(video => {
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
