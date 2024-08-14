let numar = 29; 
let estePrim = true;
if (numar <= 1) {
    estePrim = false;
} 
else {
    for (let i = 2; i <= Math.sqrt(numar); i++) {
        if (numar % i === 0) {
            estePrim = false;
            break;
        }
    }
}
if (estePrim) {
    console.log(numar + " este un număr prim.");
} else {
    console.log(numar + " nu este un număr prim.");
}


    /