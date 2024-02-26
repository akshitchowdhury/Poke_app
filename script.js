const heading = document.getElementById('heading');
    const titles = ['Welcome to Pokemon Store', 'Welcome to Poke-Store'];
    let currentIndex = 0;

    function flipTitle() {
      heading.classList.add('flipped');
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % titles.length;
        heading.textContent = titles[currentIndex];
        heading.classList.remove('flipped');
      }, 500); // Adjust as needed based on animation duration
    }

    setInterval(flipTitle, 3000); // Flip every 3 second

