var a,b,c,d,e,f,g1,g2,g3,g4,g5;
a=prompt("Enter Subject # 1 : ")
b=prompt("Enter Subject # 2 : ")
c=prompt("Enter Subject # 3 : ")
d=+prompt("Enter Subject # 1 Obtained Marks : ")
e=+prompt("Enter Subject # 2 Obtained Marks : ")
f=+prompt("Enter Subject # 3 Obtained Marks : ")
h=300;i=100;
g1=((d)/i*i)
g2=((e)/i*i)
g3=((f)/i*i)
g4=d+e+f
g5=(g4/h)*i

document.write("<b>| Subject | Total Marks | Obtained Marks | Percentage |</b><br>")

document.write(a+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+i+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;"+d+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;"+g1+"%"+"<br>")

document.write(b+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;"+i+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;"+e+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;"+g2+"%"+"<br>")

document.write(c+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;"+i+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;"+f+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;"+g3+"%"+"<br>")

document.write("<b>"+"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+h+"&emsp;&emsp;&emsp;&emsp;&emsp;"+g4+"&emsp;&emsp;&emsp;&emsp;"+g5+"%"+"</b>")