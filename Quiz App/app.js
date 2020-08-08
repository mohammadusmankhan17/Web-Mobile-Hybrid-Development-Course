function check(){
    var score=0
    var right_answer_q1_o1=document.getElementById("q1-o1")
    var answer_q1_o2=document.getElementById("q1-o2")
    var answer_q1_o3=document.getElementById("q1-o3")
    var answer_q1_o4=document.getElementById("q1-o4")
    if(answer_q1_o3.checked==true){
        score++
        document.getElementById("f1").style.backgroundColor="green"
    }else{
        document.getElementById("f1").style.backgroundColor="red"
    }

    var right_answer_q2_o1=document.getElementById("q2-o1")
    var answer_q2_o2=document.getElementById("q2-o2")
    var answer_q2_o3=document.getElementById("q2-o3")
    var answer_q2_o4=document.getElementById("q2-o4")
    if(right_answer_q2_o1.checked==true){
        score++
        document.getElementById("f2").style.backgroundColor="green"
    }else{
        document.getElementById("f2").style.backgroundColor="red"
    }

    var right_answer_q3_o1=document.getElementById("q3-o1")
    var answer_q3_o2=document.getElementById("q3-o2")
    var answer_q3_o3=document.getElementById("q3-o3")
    var answer_q3_o4=document.getElementById("q3-o4")
    if(right_answer_q3_o1.checked==true){
        score++
        document.getElementById("f3").style.backgroundColor="green"
    }else{
        document.getElementById("f3").style.backgroundColor="red"
    }

    var right_answer_q4_o1=document.getElementById("q4-o1")
    var answer_q4_o2=document.getElementById("q4-o2")
    var answer_q4_o3=document.getElementById("q4-o3")
    var answer_q4_o4=document.getElementById("q4-o4")
    if(answer_q4_o3.checked==true){
        score++
        document.getElementById("f4").style.backgroundColor="green"
    }else{
        document.getElementById("f4").style.backgroundColor="red"
    }

    var right_answer_q5_o1=document.getElementById("q5-o1")
    var answer_q5_o2=document.getElementById("q5-o2")
    var answer_q5_o3=document.getElementById("q5-o3")
    var answer_q5_o4=document.getElementById("q5-o4")
    if(answer_q5_o2.checked==true){
        score++
        document.getElementById("f5").style.backgroundColor="green"
    }else{
        document.getElementById("f5").style.backgroundColor="red"
    }
    
    alert("Your Socre is :"+score)

}