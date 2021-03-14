for (var i = 0; i < document.getElementsByClassName('button').length; i++) {
    document.getElementsByClassName('button')[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}
function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    const html = document.querySelector('html')
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    html.classList.toggle('active');
}