var color,a;

// Task a
color=["green","white"]
alert("The Initial array : "+color)
document.write("The Initial array : "+color+"<br>")
a=prompt("Add color in the begining : ")
color.unshift(a)
document.write("Add color in the begining of array : "+color+"<br>")
alert("Add color in the begining of array : "+color)


// Task b
var b;
b=prompt("Add color at the end of array : ")
color.push(b)
document.write("Add color at end of array : "+color+"<br>")
alert("Add color at end of array : "+color)

// Task c
var c,i;
for(i=0;i<=1;i++){
    c=prompt("Add two color in the begning : ")
    color.unshift(c)
}
document.write("Add two color in the begining : "+color+"<br>")
alert("Add two color in the begining : "+color)

// Task d
color.shift()
document.write("The first element of color is deleted : "+color+"<br>")
alert("The first element of color is deleted : "+color)

// Task e
color.pop()
document.write("The last element of array is deleted : "+color+"<br>")
alert("The last element of array is deleted : "+color)

// Task f
var f,f1;
f=prompt("Which color you want to Add : ")
f1=prompt("At which position : ")
color.splice(f1,0,f)
document.write("The Deleted color after: "+color+"<br>")
alert("The Deleted color after: "+color)

// Task g
var g1,g2;
g1=prompt("Which color want to delete enter the starting index  : ")
g2=prompt("Which color want to delete enter the ending index  : ")
color.splice(g1,g2)
document.write("The color you deleted : "+color+"<br>")
alert("The color you deleted : "+color)