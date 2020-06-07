var a,b,c;
a=+prompt("Enter a number to show its multiplication table")
b=+prompt("Enter length of multiplication table")
document.write("Multiblication table of: "+a+"<br>")
document.write("Length of multiplication table: "+b+"<br>")
for(c=1; c<=b; c++){
    document.write(a+" "+"x"+" "+c+"="+(a*c)+"<br>")
}