
window.onload = function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        // 1. On force la grille en colonnes (3 colonnes)
        grille.style.display = "grid";
        grille.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
        grille.style.gap = "20px";
        grille.style.padding = "20px";

        videos.forEach(film => {
            // 2. On crée chaque case de film proprement
            grille.innerHTML += `
                <div style="background: #1a1a1a; border-radius: 8px; overflow: hidden; border: 1px solid #333;">
                    <a href="video.html?id=${film.id}" style="text-decoration: none; color: white; display: block;">
                        <img src="${film.image}" style="width: 100%; height: 350px; object-fit: cover; display: block;">
                        <div style="padding: 15px;">
                            <h3 style="margin: 0 0 10px 0; font-size: 1.2em;">${film.titre}</h3>
                            <p style="font-size: 0.9em; color: #ccc; line-height: 1.4; margin: 0;">${film.resume}</p>
                        </div>
                    </a>
                </div>
            `;
        });
    }
};
