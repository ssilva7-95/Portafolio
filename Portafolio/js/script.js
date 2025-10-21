document.addEventListener('DOMContentLoaded', function () {

    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        once: true, // La animación solo ocurre una vez
    });

    // Inicializar Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#9966CC"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.8,
                "random": false,
            },
            "size": {
                "value": 4,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#9966CC",
                "opacity": 0.7,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

});
