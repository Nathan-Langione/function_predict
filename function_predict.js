/*The function greeting prints returns "Hello". Var word is set to "Hello" and is then printed to the console.  */
function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);




/* The add function prints "Summing Numbers!", then prints "num1 is: X", then prints  "num2 is: y".
it then sets sum equal to num1+num2 and returns sum.
Results:
Summing Numbers!
num1 is: 3
num2 is: 5

Summing Numbers!
num1 is: 4
num2 is: 7
8
11
*/
function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5);
    var result2 = add(4,7);
    console.log(result1);
    console.log(result2);
    


/* The highFive function prints the numbers from 0 to the number passed in. If the number is 5 it instead prints "High Five!". Nothing is returned by the function.
Result: We are not calling this function so there is no result.   */
function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }
    