// Chapter 38-42

// Tassk # 1

// function power(a,b){
//     var i,a,b,ans=1;
//     for(i=1;i<=b;i++){
//         ans=ans*a
//     }
//     return ans
// }
// var ab;
// ab=power(3,3)
// console.log(ab)

// Task # 2

// function LeapYear(y){
//     var y;
//     if(y%4===0){
//         alert("The Leap Year")
//     }
//     else{
//         alert("The Year is not Leap Year")
//     }
// }
// var b;
// b=+prompt("Enter Year")
// LeapYear(b)

// Task # 3

// function AreaTri(a,b,c){
//     var s,a,b,c;
//     s=(a+b+c)/2
//     return s
// }
// function Area(a,b,c){
//     var A,a,b,c,s;
//     s=AreaTri(a,b,c)
//     A=s*((s-a)*(s-b)*(s-c))
//     return A
// }
// var a,b,c,ans;
// a=+prompt("Enter Value of a=")
// b=+prompt("Enter Value of b=")
// c=+prompt("Enter Value of c=")

// ans=Area(a,b,c)
// document.write("The Area of Triange : "+ans)

// Task # 4

// function percentage(s1,s2,s3){
//     var p,s1,s2,s3;
//     p=((s1+s2+s3)/300)*100
//     return p
// }

// function average(s1,s2,s3){
//     var a,s1,s2,s3;
//     a=(s1+s2+s3)/3
//     return a
// }

// function main(s1,s2,s3){
//     var a,p;
//     a=average(s1,s2,s3)
//     p=percentage(s1,s2,s3)
//     document.write("The Percantage is : "+p+"<br>")
//     document.write("The Average is : "+a+"<br>")
// }


// var sub1,sub2,sub3;
// sub1=+prompt("Enter Studend 1 Marks : ")
// sub2=+prompt("Enter Studend 2 Marks : ")
// sub3=+prompt("Enter Studend 3 Marks : ")

// main(sub1,sub2,sub3)

// Task # 5


// function indxof2(string,character){
//         var i=0;
//         while(i<string.length){
//             if(string[i]===character){
//                 return i;
            
//             }
//             i++
//         }
//         return -1
// }

// var ans;
// ans=indxof2("usman","a")
// console.log(ans)

// Task # 6

// function RemoveVowel(string){

//     if(string.length<=25){
//         var vowels={
//             'a': true,
//             'e': true,
//             'i': true,
//             'o': true,
//             'u': true
//         }
    
//         var result=""
    
//         var i=0
//         while(i<string.length){
//             var letter = string[i].toLowerCase()
//             if(!vowels[letter]){
//                 result+=string[i]
//             }
//             i++
//         }
//         return result
//     }
//     else{
//         alert("The sentence is more than 25 characters")
//     }
// }
// var ans;
// ans=RemoveVowel("web and mobile course")
// console.log(ans)

// Task # 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity"
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());

// Task # 8

// function KmtoMeter(a){
//     var a,b;
//     b=a*0.621371
//     return b
// }

// function KmtoInch(a){
//     var a,b;
//     b=a*39370.07874
//     return b
// }

// function KmtoFeet(a){
//     var a,b;
//     b=a*3280.839895
//     return b
// }

// function KmtoCentimeter(a){
//     var a,b;
//     b=a* 100000
//     return b
// }

// var ans1,ans2,ans3,ans4;
// ans1=KmtoMeter(3.5)
// ans2=KmtoInch(3.5)
// ans3=KmtoFeet(3.5)
// ans4=KmtoCentimeter(3.5)

// console.log("The Kilometer to Meter: "+ans1)
// console.log("The Kilometer to Inch: "+ans2)
// console.log("The Kilometer to Feet: "+ans3)
// console.log("The Kilometer to Centimeter: "+ans4)


// Task # 9

// var count=1,working_hours, over_time,over_time_pay;

// while(count<=10){
//     working_hours=+prompt("Enter the working hours of employe: "+count+": ")
//     if(working_hours>40){
//         over_time = working_hours - 40;
//         over_time_pay = over_time * 12.00;
//         console.log("Employe No."+count+"overtime pay is: "+over_time_pay)
//     }
//     else{
//         console.log("You have to work for more than 40 hours to get over time pay")
//     }
//     count++
// }


// Task # 10

// var amount,a,b,c;
// amount=+prompt("Enter Amount to Withdarw!!")
// a=Math.floor(amount/100);
// b=Math.floor((amount % 100)/50);
// c=Math.floor(((amount % 100) % 50 ) / 10);

// document.write("You will have "+a+" hunderdes notes "+b+" fifty notes "+c+" ten notes")
