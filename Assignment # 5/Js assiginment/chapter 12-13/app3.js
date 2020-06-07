var num;
num=+prompt("Enter Number")
document.write("Your Enter Number: "+num+"<br>")
if(num<=0.0){
    if(num===0.0){
        document.write("You Enter 0.")
    }
    else{
        document.write("You Enter Negative Number.")
    }
    
}
else{
    document.write("You Enter Positive Number.")
}