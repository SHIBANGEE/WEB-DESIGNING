//lets create a nested object
let person =
{
    name: "KIM",
    age: 27,
    gender: "MALE",
    eyecolor: "BROWN",
    cars: {
        car1: "FERRARI", 
        car2: "BMW"
    }
}
for (i in person.cars) {
    console.log(person.cars[i]);
}