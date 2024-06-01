

window.onload = function() {
    const translate = document.querySelectorAll(".translate");

    window.addEventListener('scroll', function() {
        let scroll = window.pageYOffset;

        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll*speed}px)`;
        });
    });

}