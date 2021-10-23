function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const step = carouselInner.offsetWidth;
  let offset = 0;
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', function() {
    offset += step;
    if (offset > step * 2) {
      arrowRight.style.display = 'none';
        } else if (offset !== 0) {
          arrowLeft.style.display = '';
        }
    carouselInner.style.transform = `translateX(-${offset}px)`;
  });

  arrowLeft.addEventListener('click', function() {
    offset -= step;
    if (offset == 0) {
      arrowLeft.style.display = 'none';
    } else if (offset !== 0) {
      arrowRight.style.display = '';
    }
    carouselInner.style.transform = `translateX(-${offset}px)`;
  });
}