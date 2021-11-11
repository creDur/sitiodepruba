window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel__lista'), {
   slidesToScroll: 3,
  slidesToShow: 3,
  dots: '.carousel__indicadores',
  arrows: {
    prev: '.carousel__anterior',
    next: '.carousel__siguiente'
  }
    });
})
window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel__lista1'), {
   slidesToScroll: 2,
  slidesToShow: 2,
  dots: '.carousel__indicadores2',
  arrows: {
    prev: '.carousel__anterior',
    next: '.carousel__siguiente'
  }
    });
})
window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel__lista3'), {
   slidesToScroll: 2,
  slidesToShow: 2,
  dots: '.carousel__indicadores3',
  arrows: {
    prev: '.carousel__anterior3',
    next: '.carousel__siguiente3'
  }
    });
})
window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel__lista4'), {
   slidesToScroll: 1,
  slidesToShow: 1,
  dots: '.carousel__indicadores4',
  arrows: {
    prev: '.carousel__anterior4',
    next: '.carousel__siguiente4'
  }
    });
})