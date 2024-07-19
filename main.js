
//   js de textos que cambian de fondo  de color   /////
"use strict";
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
const items = document.querySelectorAll('.item');
const config = {
    rootMargin: '-300px 0px -200px',
    threshold: 0.01
};
const onIntersection = (entries) => {
    console.log(entries);
    // Loop through the entries
    entries.forEach(entry => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('in-viewport');
        }
        else {
            entry.target.classList.remove('in-viewport');
        }
    });
};
// The observer for the images on the page
const observer = new IntersectionObserver(onIntersection, config);
items.forEach(item => {
    console.log(item);
    observer.observe(item);
});







(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');          
    });
    
    
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });



  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");       
      }
    };
    // Collapse now if page is not at top   
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $(".navbar").removeClass("d-none");
    })
  
  })(jQuery); // End of use strict



  
  //  js de las card agregadas
$(document).ready( function () {
    $('.tabs').find('a').click( function (e) {
      var theFilter = $(this).data('filter');
      
      e.preventDefault();
      $('.tabs').find('a').removeClass('active');
      $(this).addClass('active');
      
     $('.portfolio').find('li').show(); $('.portfolio').find('li').not(theFilter).hide();
      
    });
  });



