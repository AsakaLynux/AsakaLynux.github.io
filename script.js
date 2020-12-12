var mybutton = document.getElementsByClassName("myBtn");


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function aboutScroll() {
    document.getElementById("main").scrollIntoView;
}

function contactScroll() {
    document.getElementById("contact").scrollIntoView;
}