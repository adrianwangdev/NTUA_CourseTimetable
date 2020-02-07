$('.slider .owl-carousel').owlCarousel({
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    769: {
      items: 3
    }
  }
});
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the previous item
$('.owl-prev').click(function () {
  owl.trigger('prev.owl.carousel', [300]);
})
// Go to the next item
$('.owl-next').click(function () {
  owl.trigger('next.owl.carousel', [300]);
})