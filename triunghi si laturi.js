let a = 2;
let b = 4;
let c = 7;
if (a + b > c && a + c > b && b + c > a) {
    console.log("Numerele " + a + ", " + b + ", " + c + " pot forma un triunghi.");
} else {
    console.log("Numerele " + a + ", " + b + ", " + c + " nu pot forma un triunghi.");
}
// Verificăm dacă numerele pot forma un triunghi
if (a + b > c && a + c > b && b + c > a) {
    console.log("Numerele " + a + ", " + b + ", " + c + " pot forma un triunghi.");}
// Sortăm laturile pentru a ne asigura că c este cea mai mare
    let laturi = [a, b, c].sort((x, y) => x - y);
    let [x, y, z] = laturi; // x și y sunt laturile mai mici, iar z este ipotenuza