function moveSection(elementName) {
    console.log(elementName);
    var element = document.getElementById(elementName);
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 500);
}
