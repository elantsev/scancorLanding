window.onscroll = function () { scrollFunction() };

function scrollFunction () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("hideOnScroll").style.display = "none";
        document.getElementById("showOnScroll").style.display = "flex";
        document.querySelector('body>header').style.borderBottom = "1px solid #c4c4c4"

    } else {
        document.getElementById("hideOnScroll").style.display = "flex";
        document.getElementById("showOnScroll").style.display = "none";
        document.querySelector('body>header').style.borderBottom = "none"
    }
}



(function () {

    var slider = function () {

        var images = [
            {
                src: "./assets/slides/slide1.png8",
                srcset: "./assets/slides/slide1_sm.png8  800w, ./assets/slides/slide1.png8   1024w,  ./assets/slides/slide1@2x.png8  2x",
            },
            {
                src: "./assets/slides/slide2.png8",
                srcset: "./assets/slides/slide2_sm.png8  800w, ./assets/slides/slide2.png8   1024w,  ./assets/slides/slide2@2x.png8  2x",
            },
            {
                src: "./assets/slides/slide3.png8",
                srcset: "./assets/slides/slide3_sm.png8  800w, ./assets/slides/slide3.png8   1024w,  ./assets/slides/slide3@2x.png8  2x",
            }
        ];

        var i = 0;
        var x = (images.length) - 1;
        var int = 3500;

        interval = setInterval(showNext, int);

        var elements = {
            slider: document.querySelector('#slider'),
            btn: {
                left: document.querySelector('.btnLeft'),
                right: document.querySelector('.btnRight')
            }
        }

        var startInterval = function () {
            interval = setInterval(showNext, int);
        }

        var stopInterval = function () {
            clearInterval(interval);
        }

        var attachEvents = function () {
            elements.btn.left.onclick = function () { showPrevious(); };
            elements.btn.right.onclick = function () { showNext(); };
            elements.btn.left.addEventListener("mouseenter", stopInterval);
            elements.btn.left.addEventListener("mouseleave", startInterval);
            elements.btn.right.addEventListener("mouseenter", stopInterval);
            elements.btn.right.addEventListener("mouseleave", startInterval);
            elements.slider.addEventListener("mouseenter", stopInterval);
            elements.slider.addEventListener("mouseleave", startInterval);
        };

        var changeImg = function () {
            elements.slider.src = images[i].src;
            elements.slider.srcset = images[i].srcset;
        }

        var initialize = (function () {
            attachEvents();
            changeImg(i);
        })();

        var showPrevious = function () {
            (i <= 0) ? i = images.length - 1 : i--;
            changeImg(i);
        };

        var showNext = function () {
            (i >= x) ? i = 0 : i++;
            changeImg(i);
        };

    };

    slider();

})();
