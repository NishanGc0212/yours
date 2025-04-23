function showPoem() {
    const flower = document.getElementById('flower').value.toLowerCase();
    if (flower === 'sunflower') {
      // Hide the input and button with an animation
      document.querySelector('.input-container').style.animation = 'fadeOut 1s forwards';
  
      // Show the poem with a fade-in animation
      setTimeout(() => {
        document.querySelector('.poem').style.display = 'block';
        document.querySelector('.poem').style.animation = 'fadeIn 2s forwards';
      }, 1000);  // Wait for the input to fade out first
  
      // Show the "Click Me" button with a slide-in animation
      setTimeout(() => {
        document.querySelector('.open-love').style.display = 'block';
        document.querySelector('.open-love').style.animation = 'slideIn 1s forwards';
      }, 1500);  // Delay showing the button after the poem
    } else {
      alert('Please enter your favorite flower as "sunflower".');
    }
}

function openLove() {
    // Play love song
    const audio = document.getElementById('loveSong');
    audio.play();

    // Hide the poem with a fade-out animation
    document.querySelector('.poem').style.animation = 'fadeOut 1s forwards';

    // Show the quote with a fade-in animation
    setTimeout(() => {
      document.querySelector('.quote').style.display = 'block';
      document.querySelector('.quote').style.animation = 'fadeIn 2s forwards';
    }, 1000);  // Wait for the poem to fade out
}

// Generate floating hearts on page load
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 4; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart', `heart${i+1}`);
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
  }
});
