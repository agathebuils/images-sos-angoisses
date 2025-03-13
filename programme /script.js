let cycleCount = 0;
const cercle = document.querySelector('.cercle');

cercle.addEventListener('animationiteration', () => {
  cycleCount++;
  if (cycleCount === 4) {
    window.location.href = 'apres-respiration.html';
  }
});