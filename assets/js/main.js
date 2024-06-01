

window.onload = function() {

    setTimeout(function(){
        document.getElementById('loading').classList.add("hidden");
        document.getElementById('main').classList.remove("hidden");
    }, 3000);

    const translate = document.querySelectorAll(".translate");

    window.addEventListener('scroll', function() {

        console.log(this.window.pageYOffset);

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("header").classList.add('scroll');
        } else {
            document.getElementById("header").classList.remove('scroll');
        }

        if(window.pageYOffset > 0 && window.pageYOffset < 350) {
            document.getElementById('state0').classList.add("rect-active");
            document.getElementById('state1').classList.remove("rect-active");
            document.getElementById('state2').classList.remove("rect-active");
            document.getElementById('state3').classList.remove("rect-active");
        } else if(window.pageYOffset > 350 && window.pageYOffset < 700) {
            document.getElementById('state1').classList.add("rect-active");
            document.getElementById('state0').classList.remove("rect-active");
            document.getElementById('state2').classList.remove("rect-active");
            document.getElementById('state3').classList.remove("rect-active");
        } else if (window.pageYOffset > 700 && window.pageYOffset < 1200) {
            document.getElementById('state2').classList.add("rect-active");
            document.getElementById('state1').classList.remove("rect-active");
            document.getElementById('state0').classList.remove("rect-active");
            document.getElementById('state3').classList.remove("rect-active");
        } else if (window.pageYOffset > 1200) {
            document.getElementById('state3').classList.add("rect-active");
            document.getElementById('state1').classList.remove("rect-active");
            document.getElementById('state2').classList.remove("rect-active");
            document.getElementById('state0').classList.remove("rect-active");
        }

        let scroll = window.pageYOffset;

        translate.forEach(element => {
            let speed = element.dataset.speed;
            element.style.transform = `translateY(${scroll*speed}px)`;
        });
    });

}