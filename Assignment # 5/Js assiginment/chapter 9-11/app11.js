var num1,num2,obr;
num1=+prompt("Enter value of number 1: ")
obr=prompt("Enter Operator: ")
num2=+prompt("Enter value of number 2: ")
document.write("The Number 1 value : "+num1+"<br>")
document.write("The Number 2 value : "+num2+"<br>")
document.write("The Operator you enter : "+obr+"<br>")

if(obr==="+"){
    document.write("The Addition : "+(num1+num2)+"<br>")
}
else if(obr==="-"){
    document.write("The Subtraction : "+(num1-num2)+"<br>")
}
else if(obr==="*"){
    document.write("The Multipiction : "+(num1*num2)+"<br>")
}
else if(obr==="/"){
    document.write("The Division : "+(num1/num2)+"<br>")
}
else if(obr==="%"){
    document.write("The Modulus : "+(num1%num2)+"<br>")
}
else{
    document.write("You Enter Invalid Oberator+<br>")
}