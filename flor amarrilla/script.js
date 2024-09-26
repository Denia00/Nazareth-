const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const modal = document.getElementById('modal');
const response = document.getElementById('response');

// Mover el botón "No" cuando se acerque el mouse
noButton.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// Mostrar mensaje en grande al hacer clic en "Sí"
yesButton.addEventListener('click', function() {
    response.innerHTML = 'Lo sabía, elegirías la correcta.<br> Asi q felicidades ahora estamos comprometidos tu y yo. <br><br><br>HASTA Q LA MUERTO NOS SEPARE';
    modal.classList.remove('hidden'); // Mostrar el cuadro grande
});



