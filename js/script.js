$(document).ready(function () {
    anime({
        targets: '.nombre_principal',
        translateY: [
            { value: 0, duration: 500 },
            { value: 20, duration: 1000 },
            { value: 0, duration: 1000}
          ],
      });

      anime({
        targets: '.apellido_principal',
        translateY: [
            { value: 0, duration: 550 },
            { value: 20, duration: 1100 },
            { value: 0, duration: 1100}
          ],
      });

      anime({
        targets: '.ocupacion_principal',
        translateY: [
            { value: 0, duration: 600 },
            { value: 20, duration: 1200 },
            { value: 0, duration: 1200}
          ],
      });

      anime({
        targets: '.img_mia_1',
        translateY: [
            { value: 0, duration: 650 },
            { value: 20, duration: 1300 },
            { value: 0, duration: 1300}
          ],
      });
});