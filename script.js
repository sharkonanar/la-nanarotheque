const grid = document.getElementById('video-grid');

function displayVideos() {
    if (!grid || typeof videos === 'undefined') return;

    grid.innerHTML = ''; 

    videos.forEach(film => {
        // On crée la boîte de la cassette
        const card = document.createElement('div');
        
        // On insère le lien et le design tranche
        card.innerHTML = `
            <a href="video.html?id=${film.id}" style="text-decoration: none; color: inherit;">
                <div class="vhs-box">
                    <img src="${film.image}" alt="${film.titre}" class="vhs-poster">
                    <span class="vhs-title">${film.titre}</span>
                </div>
            </a>
        `;
        
        grid.appendChild(card);
    });
}

// On lance l'affichage
displayVideos();
