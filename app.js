
// console.log("javascript is working");






// // var num1 = prompt("Enter the first number:");
// // var opt = prompt("Enter the operator (+, -, *, /):");
// // var num2 = prompt("Enter the second number:");


// // if(opt === "*"){
// //     console.log(num1 + num2);
// // }else if(opt === "/"){
// //     console.log(num1 / num2);
// // }else if(opt === "+"){
// //     console.log(num1 + num2);
// // }else if(opt === "-"){
// //     console.log(num1 - num2);
// // }else{
// //     console.log("Invalid operator");
// // }



// // var str = "this is string"
// // var num = 123456789
// // var boolean = true
// // var undef = undefined
// // var nothing = null
// // console.log(typeof str, str)
// // console.log(typeof num, num)
// // console.log(typeof boolean, boolean)
// // console.log(typeof undef, undef)
// // console.log(typeof nothing, nothing)

// var age = 18;
// var city = "Karachi";
// var hasTicket = true;

// if()


var input = document.getElementById("input");

function addValue(value) {
    input.value += value;
}

function allClear() {
    input.value = "";
}

function valueClear() {
    var value = input.value;
    input.value = value.slice(0, -1);
}

function equals() {
    input.value = eval(input.value);
}

function signOperator(value) {
    input.value = value;
}
