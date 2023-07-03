function reverseString(str)
{
    return str.split("").reverse().join("");
}
var inputString = "HELLO WORLD !";
var reversedString = reverseString(inputString);
console.log("Reversed String: "+ reverseString);