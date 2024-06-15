// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('discord-modal');
    const getStartedButton = document.getElementById('get-started-button');
    const closeButton = document.querySelector('.close-button');

    getStartedButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
