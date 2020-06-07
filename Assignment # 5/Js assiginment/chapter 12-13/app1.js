var ch,d,index=0;
ch=prompt("Enter Charcter or Digit: ")
d=ch.charCodeAt(index)
document.write("Your Input: "+ch+"<br>")
document.write("Your Input ASCII value: "+d+"<br>")
if(d>=65 && d<=90){
    document.write("The Character is Upper Case<br>")
}
else if(d>=97 && d<=122){
    document.write("The Character is Lower Case <br>")
}
else if(d>=48 && d<=57){
    document.write("The Charcter is Digit<br>")
}
else{
    document.write("You enter invalid input!<br>")
}