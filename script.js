const videos = [
    { id: "1", titre: "Hitman le Cobra", resume: "Un nanar culte.", image: "images/hitman.jpg", note: 5 },
    { id: "2", titre: "Sharknado", resume: "Des requins dans une tornade.", image: "images/shark.jpg", note: 4 }
    // Ajoute tes autres vidéos ici...
];

let pageActuelle = 1;
const videosParPage = 20;

function afficherVideos() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;
    grid.innerHTML = ""; 

    const debut = (pageActuelle - 1) * videosParPage;
    const fin = debut + videosParPage;
    const selection = videos.slice(debut, fin);

    selection.forEach(video => {
        let requins = "🦈".repeat(video.note || 0); 
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-image"><img src="${video.image}"></div>
            <div class="card-content">
                <div class="rating">${requins}</div>
                <h3>${video.titre}</h3>
                <p>${video.resume}</p>
                <a href="video.html?id=${video.id}" class="btn-voir">VOIR LE NANAR</a>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById('page-info').innerText = `Page ${pageActuelle}`;
    document.getElementById('btn-prev').style.visibility = (pageActuelle === 1) ? "hidden" : "visible";
    document.getElementById('btn-next').style.visibility = (videos.length > fin) ? "visible" : "hidden";
}

document.getElementById('btn-prev').onclick = () => { pageActuelle--; afficherVideos(); window.scrollTo(0,0); };
document.getElementById('btn-next').onclick = () => { pageActuelle++; afficherVideos(); window.scrollTo(0,0); };

afficherVideos();
