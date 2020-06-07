var studentName,score,a,per;
studentName=["Michale","John","Tony"]
score=[320,230,480]
for(a=0;a<=2;a++){
        per=(score[a]/500)*100
        // alert(per)
        document.write("Socre of "+studentName[a]+"is "+score[a]+". Percentage "+per+"%<br>")
}