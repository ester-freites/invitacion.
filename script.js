// Obtén una referencia a los elementos .pill
var pills = document.querySelectorAll(".pill");

// Agrega un controlador de eventos de clic al documento (cuerpo)
document.body.addEventListener("click", function() {
    // Oculta todas las pastillas al hacer clic en cualquier parte de la pantalla
    pills.forEach(function(pill) {
        pill.style.display = "none";
    });
});

// Resto de tu código para el manejo de las luces LED
function toggle(element, className) {
    let classes = element.classList;
    classes.contains(className)
        ? classes.remove(className)
        : classes.add(className);
}

let leds = document.querySelectorAll(".led");

leds.forEach((led) => {
    // Agrega la clase "on" para encender los elementos inicialmente
    led.classList.add("on");

    led.addEventListener("click", (event) => {
        let element = event.target;
        toggle(element, "on");
    });
});

//Mover luces led
