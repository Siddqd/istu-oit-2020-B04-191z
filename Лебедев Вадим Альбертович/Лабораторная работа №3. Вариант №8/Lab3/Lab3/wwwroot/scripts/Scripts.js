window.onscroll = function () {
    var header = document.getElementById('Nav');
    if (window.scrollY > 25)
        header.classList.add('header_fixed');
    else
        header.classList.remove('header_fixed');
}