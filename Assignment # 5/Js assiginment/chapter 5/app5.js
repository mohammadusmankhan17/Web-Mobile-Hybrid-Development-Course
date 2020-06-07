var a,b;
a=+prompt("Enter the table which you want to disply : ")
document.write("Table of ",a+"<br>")
for(b=1; b<=10; b++){
    document.write(a+" "+"x"+" "+b+"="+a*b+"<br>")
}