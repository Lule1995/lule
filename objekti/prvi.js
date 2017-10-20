// 1.
// function convert(num,num2) {

// var input = num;
// var output = input.toString (num2);
// return output;
// }

//  console.log(convert(32,2));



// 2.
// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(32243));



// 3.
// function alphabet(nekistring) {
    
//     return nekistring.split('').sort().join('');
// }
// console.log(alphabet("bootstrap"));


// 4.isto

// 5.
// function bananaSplit(strings) {

//     return strings.trim().split(" ");
    
// }
// console.log(bananaSplit("sladoled od cokolade"));


// // 6.
function skraceno(strings) {

   var output = strings.trim("").split(" ");
   if (output.length > 1) {
    return (output[0] + " " + output[1].charAt(0) + ".");
       
   }
    return output[0];
     
    
}
console.log(skraceno("Mia Sretenovic"));

