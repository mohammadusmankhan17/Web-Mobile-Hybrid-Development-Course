var a,b,result;
a=2;b=1;
document.write("The Result of --a is: "+(--a)+"<br>")
document.write("The Result of --a - b-- is: "+(--a-b--)+"<br>")
document.write("The Result of --a - b-- + ++b is: "+(--a - b-- + ++b)+"<br>")
document.write("The Result of --a - b-- + ++b + b-- is: "+(--a - b-- + ++b + b--)+"<br>")

document.write("The a is : "+a+"<br>")
document.write("The b is : "+b+"<br>")
document.write("variabel result = : "+(--a - b-- + ++b + b--)+"<br>")