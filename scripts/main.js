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
