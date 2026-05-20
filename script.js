// --- DİNAMİK VERİ ÇEKME VE İLAN YÖNETİMİ ---
const spaceId = 'YOUR_SPACE_ID'; 
const accessToken = 'YOUR_ACCESS_TOKEN';
const apiUrl = `https://cdn.contentful.com/spaces/${af6w10ss53ln}/entries?access_token=${qc2H3LyqtPNIUWJJ0Yi2IxoHJfqygoxt2TElUP1hKZo}&content_type=property`;

async function fetchProperties() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const portfolioContainer = document.getElementById('portfolio-grid');
        portfolioContainer.innerHTML = ''; // Eski sabit ilanları temizle

        data.items.forEach(item => {
            const fields = item.fields;
            // Fotoğraf URL'sini Contentful'dan al
            const assetId = fields.image?.sys?.id;
            const imageUrl = data.includes.Asset.find(a => a.sys.id === assetId)?.fields.file.url || 'assets/default.jpg';

            const card = `
                <div class="property-card reveal" onclick="openPropertyModal('${fields.title}', '${fields.location}', '${fields.price}', '${fields.type}', '${fields.size}', '${fields.description}', '${imageUrl}')">
                    <div class="card-img">
                        <img src="${imageUrl}" alt="${fields.title}">
                    </div>
                    <div class="card-body">
                        <h3>${fields.title}</h3>
                        <p class="location">${fields.location}</p>
                        <p class="price">${fields.price}</p>
                        <div class="card-footer"><span>View Dossier</span><span>→</span></div>
                    </div>
                </div>
            `;
            portfolioContainer.innerHTML += card;
        });
    } catch (error) {
        console.error("İlanlar yüklenemedi:", error);
    }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', fetchProperties);
