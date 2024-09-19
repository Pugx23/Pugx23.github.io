const audio = new Audio('sound.wav')
const cat = document.querySelector('.fit-picture2');

cat.addEventListener('click', () => {
    audio.play();
})