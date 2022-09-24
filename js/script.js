$(document).ready(function () {
    anime({
        targets: '.nombre_principal',
        translateY: [
            { value: 20, duration: 800, delay: 500 },
            { value: 0, duration: 800}
          ],
          easing: 'spring(1, 100, 10, 30)'
      });

      anime({
        targets: '.apellido_principal',
        translateY: [
            { value: 20, duration: 900, delay: 600 },
            { value: 0, duration: 850}
          ],
          easing: 'spring(1, 100, 10, 30)'
      });

      anime({
        targets: '.ocupacion_principal',
        translateY: [
            { value: 20, duration: 1000, delay: 700 },
            { value: 0, duration: 900}
          ],
          easing: 'spring(1, 100, 10, 30)'
      });

      anime({
        targets: '.img_mia_1',
        translateY: 10,
          easing: 'linear',
          direction: 'alternate',
          loop: true,
          duration: 1000
      });
});

$('.icon_menu').on('click', function () {
    anime({
        targets: '.nav-link',
        translateX: [
            { value: -160 },
            { value: 0, duration: 800, delay: 500 }
          ]
      });
});