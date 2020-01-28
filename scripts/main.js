window.onscroll = function () { scrollFunction() };

function scrollFunction () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("hideOnScroll").style.display = "none";
        document.getElementById("showOnScroll").style.display = "flex";
    } else {
        document.getElementById("hideOnScroll").style.display = "flex";
        document.getElementById("showOnScroll").style.display = "none";
    }
}



(function () {

    var slider = function () {

        var images = [];
        images[0] = "./assets/slides/slide1.png8";
        images[1] = "./assets/slides/slide2.png8";
        images[2] = "./assets/slides/slide3.png8";

        var i = 0;
        var x = (images.length) - 1;
        var int = 3500;

        interval = setInterval(showNext, int); // hoist?

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
            elements.slider.addEventListener("mouseenter", stopInterval);
            elements.slider.addEventListener("mouseleave", startInterval);
        };

        var changeImg = function () {
            elements.slider.src = images[i];
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
