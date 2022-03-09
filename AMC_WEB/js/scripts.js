window.addEventListener('DOMContentLoaded', event => {


    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const logo = document.body.querySelector('#logoAMC');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            logo.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            logo.classList.add('navbar-shrink')
         
        }

    };


    navbarShrink();


    document.addEventListener('scroll', navbarShrink);


    const mainNav = document.body.querySelector('#mainNav');
    const nav = document.body.querySelector('#logoAMC');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            target: '#logoAMC',
            offset: 74,
        });
    };

 
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    skrollr.init();


    


});

let scrollAnimationElements = document.querySelectorAll('[data-san]');

let options = {
  rootMargin: '0px',
  threshold: .5
}

let scrollAnimationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add(entry.target.dataset.san)

      
      setTimeout(() => {
        entry.target.removeAttribute('data-san')
      }, 2000)

      scrollAnimationObserver.unobserve(entry.target)
    }
  })
}, options)


scrollAnimationElements.forEach(scrollAnimationElement => {
  scrollAnimationObserver.observe(scrollAnimationElement)
})
