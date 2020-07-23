var question;
question=[
    {
        "S No.":1,
        "question":"Which Programming you learning",
        "options":["C","Java","Python","Java Script"],
        "answer":"d"
    },
    {
        "S No.":2,
        "question":"which proamming is best for Web Development",
        "options":["C","Java","Python","Java Script"],
        "answer":"d"
    },
    {
        "S No.":3,
        "question":"Which programmimg is used foe A.I",
        "options":["C","Java","Python","Java Script"],
        "answer":"c"
    }
]


var score,i,data,a,answer;

score=0;
for(questions in question){
    a=question[questions]["S No."]
    data=a.toString()+": "+question[questions]["question"]+"\n (a)."+question[questions]["options"][0]+"\n (b)."+question[questions]["options"][1]+"\n (c)."+question[questions]["options"][2]+"\n (d)."+question[questions]["options"][3]
    answer=prompt(data)
    if(answer===question[questions]["answer"]){
        score+=1
    }
    
}

alert("your score is :"+score)


