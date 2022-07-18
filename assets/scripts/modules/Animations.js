class Animations {
  constructor() {

    function handleScroll(container) {
      // Setting: Start fading halfway up the page
      const startPos = 0.5;
      const containerOffset = container.offsetTop;
      //  gets the number of pixels the window has been scrolled vertically
      const scrollTop = window.scrollTop;
      const currentPos = containerOffset - scrollTop;
      const viewportHeight = window.innerHeight;

      if (currentPos < viewportHeight * startPos) {
        container.style.opacity = 0;
      } else {
        container.style.opacity = 1;
      }
    }
    
    const allContentContainers = document.querySelectorAll(".ro--content-container");

    allContentContainers.forEach(container => {
      window.addEventListener('scroll', handleScroll(container));
    });
    
  }
}

export default Animations;