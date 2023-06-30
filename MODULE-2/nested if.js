let units = 1850;
let charge;
if (units<=200) {
    charge = "10Rs/- per unit"
}
else if (units<=400) {
    charge = "20Rs/- per unit"
}
else {
    charge = "25Rs/- per unit"
}
console.log("THE CHARGE IS -----  " + charge);