function moveSection(elementName) {
    var element = document.getElementById(elementName);
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 800);
}
