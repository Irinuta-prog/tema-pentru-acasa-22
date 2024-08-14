let password = "parolaMea23"; 
if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    console.log("Parolă foarte sigură");
} else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password)) {
    console.log("Parolă sigură");
} else if (password.length >= 6 && /^[a-zA-Z]+$/.test(password)) {
    console.log("Parolă slabă");
} else {
    console.log("Parolă nesigură");
}
// password.length verifică lungimea parolei.
// /[A-Z]/ testează dacă parola conține litere mari.
// /[a-z]/ testează dacă parola conține litere mici./\d/ testează dacă parola conține cifre.
// /^[a-zA-Z]+$/ verifică dacă parola conține doar litere (fără cifre sau alte caractere).