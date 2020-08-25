// Funcion expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
})
//Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
})

//Scroll reveal

window.sr = new ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1100,
    distance: '25rem',
    delay: 60
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1100,
    distance: '25rem',
    delay: 60
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '8rem',
    delay: 40
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '10rem',
    delay: 45
});


//How we do it rotate function
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");
if (circle != null) {
    var rotateValue = circle.style.transform;
    var rotateSum;

    selectElement('#upBtn').addEventListener('click', () => {
        rotateSum = rotateValue + "rotate(-90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    })

    selectElement('#downBtn').addEventListener('click', () => {
        rotateSum = rotateValue + "rotate(+90deg)";
        circle.style.transform = rotateSum;
        rotateValue = rotateSum;
    })
}
