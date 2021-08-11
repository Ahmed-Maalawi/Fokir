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

});

// -----------------------------------------------

const exitBtn = document.getElementById('exit-btn');
var images = document.querySelectorAll('.image');

images.forEach((image) => {

    image.addEventListener('click', () => {

        let imageSrc = image.childNodes[1].src;

        document.querySelector('.display-box img').src= imageSrc;

        exitBtn.parentElement.classList.remove('hidden');
    });
});


exitBtn.addEventListener('click', function() {

    this.parentElement.classList.add('hidden');
});

// --------------------(filltering code) -----------

const filterBtns = document.querySelectorAll('#portfolio ul button');

filterBtns.forEach(btn => {

    btn.addEventListener('click', (event) => {

        filterBtns.forEach(item => {

            if(item.classList[1] == 'active-btn') {

                item.classList.remove('active-btn');
            }
        });

        event.target.classList.add('active-btn');

        var sec = event.target.textContent;

        if(sec == 'graphic') {

            filterImg(sec);

        } else if (sec == 'web design'){

            filterImg('web-design');

        } else if (sec == 'branding') {

            filterImg(sec);
            
        } else {

            displayAllImg();
        }
    });
});

function filterImg(section) {

    var allImg = document.querySelectorAll('.image');

    allImg.forEach(img => {

        if(img.classList[1] != section) {
            
            img.classList.add('d-none');
        } else {
            
            img.classList.remove('d-none');
        }
    });
}

function displayAllImg() {

    var allImg = document.querySelectorAll('.image');

    allImg.forEach(item => {

        if(item.classList[2] == 'd-none')
            item.classList.remove('d-none');
    });
}