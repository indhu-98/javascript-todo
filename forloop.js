for (count = 1; count < 5; count = count + 1) {
    console.log("indhusree")
}
for (count = 1; count < 11; count = count + 1) {
    console.log(count);
}
for (count = 1; count < 11; count = count + 2) {
    console.log(count);
}

for (count = 1; count < 11; count = count + 1) {
    console.log(count + "*2 =" + count * 2);
}
for (count = 11; count > 0; count = count - 1) {
    console.log(count);
}
function divide(dividend, divisor) {
    /**     var result = 0;
        while(dividend >= divisor){
            dividend -= divisor;
            result++;
        }
    
        return result;**/
    return dividend / divisor;
}
console.log(divide(9, 2)
);
