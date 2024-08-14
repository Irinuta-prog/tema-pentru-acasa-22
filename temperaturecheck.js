let temperature = 14;
if (temperature < 0) {
    console.log("Îngheț");
} else if (temperature >= 0 && temperature <= 10) {
    console.log("Frig");
} else if (temperature >= 11 && temperature <= 25) {
    console.log("Moderat");
} else {
    console.log("Cald");
}