const API_URL = "http://localhost:8080/api/deals";

async function loadDeals() {
    const container = document.getElementById('deals-container');
    try {
        const res = await fetch(API_URL);
        const deals = await res.json();
        container.innerHTML = deals.map(d => `
            <div class="deal-card">
                <h3>${d.title}</h3>
                <p><b>${d.discount}% OFF</b></p>
                <p class="price">Now: ₦${d.price}</p>
            </div>
        `).join('');
    } catch {
        container.innerHTML = "<p>Can't connect. Backend not running yet.</p>";
    }
}
loadDeals();
