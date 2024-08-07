document.addEventListener('DOMContentLoaded', (event) => {
  const trickyButton = document.getElementById('move-random');
  
  if (trickyButton) {
    trickyButton.addEventListener('mouseover', function () {
      trickyButton.style.left = Math.random() * 90 + '%';
      trickyButton.style.top = Math.random() * 90 + '%';
    });
  }

  const iyaaButton = document.querySelector('.iyaa');
  
  if (iyaaButton) {
    iyaaButton.addEventListener('click', function () {
      document.getElementById('image-alt').src = "https://c.tenor.com/lqtU1G4aaqIAAAAj/yom-dance.gif";
      document.getElementById('text').innerHTML = "Achi Bachiii🙆 &hearts; &hearts; &hearts; &hearts;";
    });
  }
});
