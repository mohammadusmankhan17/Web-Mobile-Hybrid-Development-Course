var input,password;
input=prompt("Enter Password: ")
password="web&mobile"
if(input===" "){
    alert("Please Enter Password")
}
else if(input===password){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}
