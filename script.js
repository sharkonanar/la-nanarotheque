window.addEventListener('load', function() {
    const grille = document.getElementById('video-grid');
    
    if (typeof videos !== 'undefined') {
        grille.innerHTML = ""; 

        videos.forEach(film => {
            grille.innerHTML += `
                <div class="vhs-case">
                    <a href="video.html?id=${film.id}" class="vhs-link">
                        
                        <div class="vhs-front">
                            <img src="images/jaquette.jpg" class="box-blank">
                            <div class="poster-overlay" style="background-image: url('images/posters/${film.id}.jpg')"></div>
                        </div>

                        <div class="vhs-spine">
                            <img src="images/vhs-texture.png" class="texture-overlay">
                            <div class="vhs-info">
                                <span class="vhs-title">${film.titre}</span>
                            </div>
                        </div>

                    </a>
                </div>
            `;
        });
    }
});
