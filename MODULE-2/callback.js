function greet(name) {
    console.log("HELLO, " + name + "!");
}
function sayHelloWithDelay(callback) {
    setTimeout(function() { 
        callback("Vaish");
    }, 2000);
}
sayHelloWithDelay(greet);