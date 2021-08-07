const navBar = document.querySelector('nav'),

      navBarUl = document.querySelector('nav ul'),
      
      barsBtn = document.querySelector('nav .top-nav .menu-btn');

window.addEventListener('scroll', () => {
    
    'use strict';
    
    if(this.pageYOffset > 1) {

        navBar.classList.add('mov-nav');

    } else {

        navBar.classList.remove('mov-nav');

    }
});


barsBtn.addEventListener('click', () => {

    'use strict';

    navBarUl.classList.toggle('hide');
});




// $(function () {
//     var titleWidth = $('.animation').outerWidth();

//     "use strict";

//     (function inmate_title() {


//         $('.animation').animate({
    
//             width: titleWidth+'px',
//         }, 3000, function () {
//             $(this).animate({
//                 width: '-30px'
//             }, 3000, function (){
//                 inmate_title();
//             });
//         });
//     }());

// console.log(titleWidth);
// });

// ----------------- toggle active class when scroll -----------
var sections = document.querySelectorAll('section');

onscroll = function () {

    'use strict';

    var scrollPos = document.documentElement.scrollTop;

    if(scrollPos >= 0 && scrollPos <= 100) {

        removeActiveClasses();

        this.document.querySelector('nav ul li a[href="#home"]').parentElement.classList.add('active');
    }

    sections.forEach((section) => {

        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {

            let currentId = section.getAttribute('id');

            removeActiveClasses();

            addActiveClass(currentId);

        }

    } );
}


function removeActiveClasses () {

    'use strict';

    document.querySelectorAll('nav ul li').forEach((element) => {

        element.classList.remove('active');
    });

}


function addActiveClass(id){

    'use strict';

    let target = `nav ul li a[href="#${id}"]`;

    document.querySelector(target).parentElement.classList.add('active');

}

// ----------- loading animation ----------------
window.addEventListener('load', () => {
    const pageload = document.querySelector('.loading-page');
        pageload.classList.add('hidden');
})