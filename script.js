// Basic interactivity for Baby Boss website

document.addEventListener('DOMContentLoaded', function() {
    // Example: Alert when clicking 'Get Tickets'
    const getTicketsBtn = document.querySelector('.hero-buttons .yellow');
    if (getTicketsBtn) {
        getTicketsBtn.addEventListener('click', function() {
            alert('Tickets coming soon! Stay tuned.');
        });
    }

    // Example: Alert for 'BABY BOSS DOCS'
    const docsBtn = document.querySelector('.hero-buttons .red');
    if (docsBtn) {
        docsBtn.addEventListener('click', function() {
            alert('Baby Boss Docs are not available yet.');
        });
    }

    // Example: Search input
    const searchInput = document.querySelector('.search-login input');
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            alert('Search feature coming soon!');
        }
    });
});
