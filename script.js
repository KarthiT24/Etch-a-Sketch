document.addEventListener('DOMContentLoaded', () => {
    const boardContainer = document.getElementById('boardContainer');
    const themeToggle = document.getElementById('themeToggle');
    const clearBoard = document.getElementById('clearBoard');

    // Create 64x64 grid
    for (let i = 0; i < 150.5 * 17; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = getRandomColor();
        });
        boardContainer.appendChild(gridItem);
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });

    // Clear board
    clearBoard.addEventListener('click', () => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'white';
        });
    });

    // Get random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
