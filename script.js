
function obtenerInformacion() {
    let temperatura = parseFloat(document.getElementById("Entrada").value);

    kel = temperatura + 273.15;
    fah = (temperatura * 9/5) + 32;

    let g_celsius = document.getElementById("celsius");
    let g_kelvin = document.getElementById("kelvin");
    let g_fahrenheit = document.getElementById("fahrenheit");

    g_celsius.innerHTML = temperatura  + " °C";
    g_kelvin.innerHTML = kel + " °K";
    g_fahrenheit.innerHTML = fah + " °F";

    // Para mostrar en consola:

    console.log(`Ingresa: ${temperatura} °C`);
    console.log("Salida:");
    console.log(`${kel} °K`);
    console.log(`${fah} °F`);

}


