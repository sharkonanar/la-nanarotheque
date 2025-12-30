const grid = document.getElementById('video-grid');

function displayVideos() {
    if (!grid || typeof videos === 'undefined') return;

    grid.innerHTML = ''; 

    videos.forEach(film => {
        // Création du lien qui englobe la jaquette
        const link = document.createElement('a');
        link.href = `video.html?id=${film.id}`;
        link.className = 'vhs-case';

        link.innerHTML = `
            <img src="${film.image}" alt="${film.titre}" onerror="this.src='https://via.placeholder.com/200x300?text=Image+Manquante'">
            <div class="vhs-info">
                <h3>${film.titre}</h3>
            </div>
        `;
        
        grid.appendChild(link);
    });
}

// Lancement au chargement de la page
window.onload = displayVideos;
