// check list 1 strats
/* var name = ritu;
var age = 23;
var country = "Bangladesh" */
//ends

// check list 2 strats
for(var i = 1; i<=100; i++){
    //document.write(i)
}
//ends

// check list 3 strats
for(var i = 51; i<=80; i+=2){
    //console.log(i)
}
//ends

// check list 4 strats
function sum(num1, num2, num3){
    var sum = num1+num2+num3;
    document.write("Total sum = " + sum + "</br>");
}
sum(10, 20, 30);
//ends

//অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও
var student={
    id: 123,
    name: "Shangida khatun",
    cgpa: 4.33,
    sub: ["Bangla", "English", "Math"]
}

var property = Object.keys(student);
console.log(property);

var property_value = Object.values(student);
console.log(property_value);
//ends

//Celsius to Fahrenheit Conversion strats
function convertFahrenheit(Celsius){
    var fahrenheit  = (Celsius * 9/5) + 32;
    return fahrenheit;
}
var result = convertFahrenheit(30);
document.write("Celsius to Fahrenheit Conversion : " + result +"</br>");
//ends

//Fahrenheit to Celsius Conversion strats
function convertCelsius(fahrenheit){
    var celsius =(fahrenheit - 32) * 5/9;
    return celsius;
}
var result =convertCelsius(35);
document.write("Fahrenheit toCelsius Conversion : " + result.toFixed(3) +"</br>");
//ends

// Find Simple Interest strats
function findInterest(principal, rate, time){
    var interest = (principal * rate *  time)/100;
    return interest;
}
var result = findInterest(1000000, 0.05, 3);
document.write("Total interest is : " + result +"</br>")
//ends

var mark = prompt("Enter your mark : ");

if(mark>100 || mark<=0){
    document.write("Invalid your mark");
}
else if(mark>=80 && mark<=100){
    document.write("your latter grade is A+");
}
else if(mark>=70 && mark<=70){
    document.write("your latter grade is A");
}
else if(mark>=60 && mark<=69){
    document.write("your latter grade is A-");
}
else if(mark>=50 && mark<=59){
    document.write("your latter grade is B");
}
else if(mark>=40 && mark<=49){
    document.write("your latter grade is C");
}
else if(mark>=33 && mark<=39){
    document.write("your latter grade is D");
}
else{
    document.write("your are fail")
}
