document.addEventListener("DOMContentLoaded", () => {
    // Define tabs and their corresponding content files
    const tabs = [
        { id: 'home', file: 'content/home.html' },
        { id: 'early-life', file: 'content/early-life.html' },
        { id: 'projects', file: 'content/projects.html' },
        { id: 'places', file: 'content/places.html' },
        { id: 'hobbies', file: 'content/hobbies.html' },
        { id: 'quotes', file: 'content/quotes.html' }
    ];

    // Preload all tabs via fetch
    tabs.forEach(tab => {
        const container = document.getElementById(tab.id);
        if (container) {
            fetch(tab.file)
                .then(response => {
                    if (!response.ok) throw new Error(`Could not load ${tab.file}`);
                    return response.text();
                })
                .then(html => {
                    container.innerHTML = html;
                })
                .catch(err => {
                    container.innerHTML = `<div class="card"><p>Error loading content.</p></div>`;
                    console.error(err);
                });
        }
    });
});

function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Highlight correct navigation tab button
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
