

window.onload = function() {

    setTimeout(function(){
        document.getElementById('loading').classList.add("hidden");
        document.getElementById('main').classList.remove("hidden");
    }, 3000);

    const translate = document.querySelectorAll(".translate");

    window.addEventListener('scroll', function() {

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("header").classList.add('scroll');
        } else {
            document.getElementById("header").classList.remove('scroll');
        }

        let scroll = window.pageYOffset;

        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll*speed}px)`;
        });
    });

}