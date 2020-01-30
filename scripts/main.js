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
                src: "./assets/slides/slide1.png",
                srcset: "./assets/slides/slide1_sm.png  800w, ./assets/slides/slide1.png   1024w,  ./assets/slides/slide1@2x.png  2x",
            },
            {
                src: "./assets/slides/slide2.png",
                srcset: "./assets/slides/slide2_sm.png  800w, ./assets/slides/slide2.png   1024w,  ./assets/slides/slide2@2x.png  2x",
            },
            {
                src: "./assets/slides/slide3.png",
                srcset: "./assets/slides/slide3_sm.png  800w, ./assets/slides/slide3.png   1024w,  ./assets/slides/slide3@2x.png  2x",
            }
        ];

        var i = 0;
        var x = (images.length) - 1;
        var int = 3000;

        interval = setInterval(showNext, int);

        var elements = {
            slider: document.querySelector('#slider'),
            btn: {
                left: document.querySelector('.btnLeft'),
                right: document.querySelector('.btnRight')
            },
            dots: document.querySelector('.dots'),
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
            elements.dots.addEventListener("mouseenter", stopInterval);
            elements.dots.addEventListener("mouseleave", startInterval);
            elements.dots.addEventListener("click", (e) => {
                if (e.target.className === 'dot') {
                    i = +e.target.dataset.index
                    changeImg(i)
                }
            });
        };

        var changeImg = function (i) {
            elements.slider.src = images[i].src;
            elements.slider.srcset = images[i].srcset;
            elements.dots.innerHTML = images.map((_, index) =>
                `<div data-index="${index}" class="dot${index === i ? ' active' : ''}"></div>`
            ).join('')

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
