var A,a,b,d;
b=prompt("Welcome to ABC Bakery.What do you wnat to order Sir/Ma'am.")
A=["cake", "apple pie", "cookie", "chips", "patties"]

d=A.indexOf(b)

if(b===A[0]){
    document.write(b+"is <b>avaliable</b> at index "+d+" in our bakery<br>") 
}
else if(b===A[1]){
    document.write(b+"is <b>avaliable</b> at index "+d+" in our bakery<br>")
}
else if(b===A[2]){
    document.write(b+"is <b>avaliable</b> at index "+d+" in our bakery<br>")
}
else if(b===A[3]){
    document.write(b+"is <b>avaliable</b> at index "+d+" in our bakery<br>")
}
else if(b===A[4]){
    document.write(b+"is <b>avaliable</b> at index "+a+" in our bakery<br>")
}
else{
    document.write("We are sorry."+b+" is <b>not avaliable</b> in our bakery<br>")
}