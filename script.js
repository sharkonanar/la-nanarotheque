window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        grille.style.display = "grid";
        grille.style.gridTemplateColumns = "repeat(auto-fill, minmax(450px, 1fr))"; 
        grille.style.gap = "25px";
        grille.style.justifyContent = "center";
        grille.style.padding = "20px";
        grille.style.maxWidth = "1400px";
        grille.style.margin = "0 auto";

        videos.forEach(film => {
            // Petite fonction pour afficher les requins selon la note
            // Si film.note = 3, ça affiche 3 requins
            const requins = "🦈".repeat(film.note || 0);

            grille.innerHTML += `
                <div style="background: #1a1a1a; border: border: 2px solid white; border-radius: 10px; overflow: hidden; height: 250px;">
                    <a href="video.html?id=${film.id}" style="display: flex; text-decoration: none; color: white; height: 100%;">
                        
                        <div style="width: 200px; flex-shrink: 0;">
                            <img src="${film.image}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        
                        <div style="padding: 20px; display: flex; flex-direction: column; justify-content: flex-start; flex-grow: 1;">
                            <h3 style="margin: 0 0 5px 0; font-size: 1.4em; color: #007bff; font-family: sans-serif;">
                                ${film.titre}
                            </h3>
                            
                            <div style="margin-bottom: 10px; font-size: 1.2em; text-shadow: 0 0 10px #007bff, 0 0 20px #007bff;">
                                ${requins}
                            </div>

                            <p style="font-size: 1em; color: #bbb; margin: 0; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                                ${film.resume || 'Aucun résumé.'}
                            </p>
                            
                            <div style="margin-top: auto; font-weight: bold; color: #007bff; text-align: right;">
                                VOIR LA VIDÉO >
                            </div>
                        </div>
                        
                    </a>
                </div>
            `;
        });
    }
});
