var sub1,sub2,su2,total,per;
sub1=+prompt("Enter Subject 1 Marks : ")
sub2=+prompt("Enter Subject 2 Marks : ")
sub3=+prompt("Enter Subject 3 Marks : ")
total=300;
per=((sub1+sub2+sub3)/total)*100
document.write("The Marks of English : "+sub1+"<br>")
document.write("The Marks of Math : "+sub2+"<br>")
document.write("The Marks of Urdu : "+sub3+"<br>")
document.write("Total Marks: "+total+"<br>")
document.write("Marks Obtained: "+(sub1+sub2+sub3)+"<br>")
document.write("Perentage : "+per+"%"+"<br>")

if(per>=80){
    document.write("Remarks: The grade is A-one  : Excellent")
}
else if(per>=70){
    document.write("Remarks: The grade is A : Good")
}
else if(per>=60){
    document.write("Remarks: The Grade is B : You need to improve")
}
else{
    document.write("Remarka: Yor % is less than 60% you are fail")
}