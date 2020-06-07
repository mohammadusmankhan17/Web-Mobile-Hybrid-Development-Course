var c;
c=prompt("Enter the Character: ")
Lvowel=(c==='a'||c==='e'||c==='i'||c==='o'||c==='u')
Uvowel=(c==='A'||c==='E'||c==='I'||c==='O'||c==='U')
if(Lvowel||Uvowel){
    document.write("The Character is Vowel<br>")
    document.write("True")
}
else{
    document.write("The Character is not Vowel<br>")
    document.write("False")
}