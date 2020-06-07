var A,a,b;
A=[24, 53, 78, 91, 12]
b=+prompt("Enter Number: ")
document.write("Array items: "+A+"<br>")
for(a=0;a<=4;a++){
    if(b>=A[a]){
        document.write("The Largest Number is:"+b+"<br>")
        break
    }
}