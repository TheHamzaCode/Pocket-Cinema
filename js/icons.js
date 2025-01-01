const icons = {
    home: '🏠',
    brain: '🧠',
    upload: '⬆',
    playlist: '📑',
    live: '📡',
    search: '🔍',
    login: '👤'
};

function initIcons() {
    document.querySelectorAll('[class^="icon-"]').forEach(icon => {
        const iconName = icon.className.split('icon-')[1];
        icon.textContent = icons[iconName] || '';
    });
}