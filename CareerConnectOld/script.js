document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // Search Action
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Ekhane apni search filtering ba backend API integrate korte parben
        } else {
            alert('Please enter a keyword to search.');
        }
    });

    // View Details Buttons Action
    const viewButtons = document.querySelectorAll('.btn-card');
    viewButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const jobTitle = button.parentElement.querySelector('h3').innerText;
            alert(`Redirecting to details page for: ${jobTitle}`);
        });
    });
});