// change header*****************************************************
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


// login*************************************************************

const loginWrapper = document.querySelector('.login-wrapper')
// const loginWrapper = document.getElementsByClassName('login-wrapper')[0]
console.log(loginWrapper);


document.addEventListener('click', (e) => {
    console.log(e.target.className);
    if (e.target.className === 'enter-btn') {
        e.preventDefault()
        loginWrapper.style.display = 'flex'
    }
    if (e.target.className === 'login-wrapper' || e.target.className === 'close') {
        loginWrapper.style.display = 'none'
    }
    // if (e.target.className === 'submit') {
    //     const email = document.getElementById('email')
    //     const password = document.getElementById('password')

    //     //request to server
    // }

})

