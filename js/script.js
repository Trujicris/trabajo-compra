const slider = document.querySelector('.slider');
const buyButton = document.querySelector('.buy-button');
const overlay = document.querySelector('.overlay');
const compradoText = document.createElement('div');
compradoText.className = 'comprado';
compradoText.textContent = 'Comprado';

buyButton.addEventListener('click', () => {
    overlay.classList.add('show');
    compradoText.classList.add('show');
    slider.firstElementChild.appendChild(compradoText);
});