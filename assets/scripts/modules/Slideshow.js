import Glide from "@glidejs/glide";

class Slideshow {
  constructor() {
    const allSlideshows = document.querySelectorAll(".ro--slideshow");
    
    allSlideshows.forEach(slideshow => {
      const slides = slideshow.querySelectorAll(".ro--slideshow__slide");
      const slideCount = slides.length;
      const bulletsWrapper = slideshow.querySelector(".ro--slideshow__bullets");
      let dotHTML = "";
      
      for (let i = 0; i < slideCount; i++) {
        dotHTML += `<button class="ro--slideshow__bullet glide__bullet" data-glide-dir="=${i}"></button>`
      }

      bulletsWrapper.insertAdjacentHTML("beforeend", dotHTML);

      const glide = new Glide(slideshow, {
        type: "carousel",
        hoverpause: false,
        perView: 1,
        autoplay: 5000
      });

      glide.mount();
    });

  }
}

export default Slideshow;
