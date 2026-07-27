const API_URL = "https://noalgo-backend.onrender.com";

async function loadDeals() {
    const container = document.getElementById('deals-container');
    try {
        const res = await fetch(API_URL);
        const deals = await res.json();
        container.innerHTML = deals.map(d => `
            <div class="deal-card">
                <h1>${d.title}</h1>
                <p><b>${d.discount}% OFF</b></p>
                <p class="price">Now: $${d.price}</p>
            </div>
        `).join('');
    } catch (e) {
        container.innerHTML = "<p>Can't connect. Backend not running yet.</p>";
    }
}

loadDeals();
