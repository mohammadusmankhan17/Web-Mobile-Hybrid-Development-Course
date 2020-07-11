var min,sec,msec;
var minHeading,secHeading,msecHeading;
min=0;
sec=0;
msec=0;
minHeading=document.getElementById("min");
secHeading=document.getElementById("sec");
msecHeading=document.getElementById("msec");
var interval;
function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML=sec;
        msec=0;
    }
    else if(sec >=60){
        min++
        minHeading.innerHTML=min;
        sec=0;
    }
}

function start(){
    interval=setInterval(timer,10);
    document.getElementById("str").disabled = true;
}

function pause(){
    clearInterval(interval)
    document.getElementById("str").disabled = false;
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    stop()
    document.getElementById("str").disabled = false;
}
newlap=1
function lap(){
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
    var h=document.createElement("H6")
    var t=document.createTextNode("LAP"+newlap+" : "+min+":"+sec+":"+msec)
    h.appendChild(t);
    document.body.appendChild(h);
    newlap++
    document.getElementById("str").disabled = false;
}