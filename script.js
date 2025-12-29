// On attend que la page soit bien chargée
window.addEventListener('DOMContentLoaded', () => {
    const grille = document.getElementById('video-grid');
    
    // On vérifie si la liste "videos" existe dans videos.js
    if (typeof videos !== 'undefined') {
        // On vide la grille au cas où
        grille.innerHTML = "";

        // On affiche chaque film
        videos.forEach(film => {
            grille.innerHTML += `
                <div class="video-card">
                    <a href="video.html?id=${film.id}">
                        <img src="${film.image}" alt="${film.titre}">
                        <h3>${film.titre}</h3>
                    </a>
                </div>
            `;
        });
    } else {
        grille.innerHTML = "Erreur : Le fichier videos.js n'est pas reconnu par le navigateur.";
    }
});
