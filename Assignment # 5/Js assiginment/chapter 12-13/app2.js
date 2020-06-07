var num1,num2;
num1=+prompt("Enter Number 1:")
num2=+prompt("Enter Number 2:")
document.write("The Value of Number 1:"+num1+"<br>")
document.write("The Value of Number 2:"+num2+"<br>")
if(num1>num2){
    document.write("The Number 1 is greater than Number 2<br>")
}
else if(num2>num1){
    document.write("The Number 2 is greater than Number 1<br>")
}
else if(num1===num2){
    document.write("The Number 1 is equal to Number 2<br>")
}
else{
    document.write("Invalid Input!")
}