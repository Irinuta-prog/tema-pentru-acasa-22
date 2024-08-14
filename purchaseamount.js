let purchaseAmount = 150; 
let discount = 0;
let taxRate = 0.05; // 5% impozit
// Aplicăm reducerea de 10% dacă purchaseAmount este mai mare sau egal cu 100
if (purchaseAmount >= 100) {
    discount = 0.10; // 10% reducere
}
let discountedAmount = purchaseAmount - (purchaseAmount * discount);
// Adăugăm impozitul de 5% la suma după reducere
let totalAmount = discountedAmount + (discountedAmount * taxRate);
console.log("Suma totală de plată este: " + totalAmount.toFixed(2));