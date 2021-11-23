$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:1000,
    nav:true,
    responsive:{
        0:{
            items:1
          
        },
        581:{
           items:2
        },
        929:{
            items:3
        },
        1250:{
            items:4
        },
        1477:{
          items:5
      },
    }
    
})


$('.caro2').owlCarousel({
    loop:true,
    margin:10,
    autoplay:1000,
    nav:true,
    responsive:{
        0:{
            items:1
        },
    }
})

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky");
  }
}


