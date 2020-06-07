var a,b;
a=prompt("Enter value of Table : ")
if(a==="-"){
    for(b=1; b<=10; b++){
        document.write(5+" "+"x"+" "+b+"="+(5*b)+"<br>")
    }
}
else{
    for(b=1; b<=10; b++){
        document.write(a+" "+"x"+" "+b+"="+((+a)*b)+"<br>")
    }
}