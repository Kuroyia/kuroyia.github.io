function moveNo() {
    var noElement = document.getElementById('no');

    // Get the dimensions of the current viewport
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    // Calculate the maximum allowed position based on the viewport dimensions
    var maxX = viewportWidth - noElement.clientWidth;
    var maxY = viewportHeight - noElement.clientHeight;

    // Calculate random positions within the viewport
    var randomX = Math.floor(Math.random() * 500);
    var randomY = Math.floor(Math.random() * 500);

    // Set the new position
    noElement.style.left = randomX + 'px';
    noElement.style.top = randomY + 'px';
}
