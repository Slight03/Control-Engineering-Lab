var div = document.getElementById('answ');
var display = 0;
function answeer()
{
   if(display == 0)
   {
    div.style.display = 'block';
    display =1 ;
   }
   else{
    div.style.display = 'none';
    display = 0;
   }
   
}

function result()
{
    var score=0;
    if(document.getElementById("corr1").checked)
    {
        score++;
    }
    if(document.getElementById("corr2").checked)
    {
        score++;
    }
    if(document.getElementById("corr3").checked)
    {
        score++;
    }
    if(document.getElementById("corr4").checked)
    {
        score++;
    }
    if(document.getElementById("corr5").checked)
    {
        score++;
    }
    alert("Your Score is:"+score+"/5")

    {
        document.getElementById("butsub1").style.display="inline";
    }
    if(document.getElementById("corr1").checked)
    {
        document.getElementById('correctanswer1').style.display='block';
    }
    if(document.getElementById("corr2").checked)
    {
        document.getElementById('correctanswer2').style.display='block';
    }
    if(document.getElementById("corr3").checked)
    {
        document.getElementById('correctanswer3').style.display='block';
    }
    if(document.getElementById("corr4").checked)
    {
        document.getElementById('correctanswer4').style.display='block';
    }
    if(document.getElementById("corr5").checked)
    {
        document.getElementById('correctanswer5').style.display='block';
    }
    if(document.getElementById("incorr1").checked)
    {
        document.getElementById('incorrectanswer1').style.display='block';
    }
    if(document.getElementById("incorr2").checked)
    {
        document.getElementById('incorrectanswer2').style.display='block';
    }
    if(document.getElementById("incorr3").checked)
    {
        document.getElementById('incorrectanswer3').style.display='block';
    }
    if(document.getElementById("incorr4").checked)
    {
        document.getElementById('incorrectanswer4').style.display='block';
    }
    if(document.getElementById("incorr5").checked)
    {
        document.getElementById('incorrectanswer5').style.display='block';
    }
    if(document.getElementById("incorr6").checked)
    {
        document.getElementById('incorrectanswer6').style.display='block';
    }
    if(document.getElementById("incorr7").checked)
    {
        document.getElementById('incorrectanswer7').style.display='block';
    }
    if(document.getElementById("incorr8").checked)
    {
        document.getElementById('incorrectanswer8').style.display='block';
    }
    if(document.getElementById("incorr9").checked)
    {
        document.getElementById('incorrectanswer9').style.display='block';
    }
    if(document.getElementById("incorr10").checked)
    {
        document.getElementById('incorrectanswer10').style.display='block';
    }
    if(document.getElementById("incorr11").checked)
    {
        document.getElementById('incorrectanswer11').style.display='block';
    }
    if(document.getElementById("incorr12").checked)
    {
        document.getElementById('incorrectanswer12').style.display='block';
    }
    if(document.getElementById("incorr13").checked)
    {
        document.getElementById('incorrectanswer13').style.display='block';
    }
    if(document.getElementById("incorr14").checked)
    {
        document.getElementById('incorrectanswer14').style.display='block';
    }
    if(document.getElementById("incorr15").checked)
    {
        document.getElementById('incorrectanswer15').style.display='block';
    }
    }
    const start = 15;
    let time = start*60;
    let re=setInterval(runcountdown,1000);
    const countdown = document.getElementById('countdown');
    let prelab = document.getElementById('prelabtest');
    let postlab = document.getElementById('postlabtest');
    var sub = document.getElementById('buttest');
    document.getElementById('buttest').addEventListener('click', function()
    {   alert("Your Prelab Test Scores Have Been Submitted.");
    
        document.getElementById('prelabtest').style.display = "none";
        document.getElementById("postlabtest").style.display = "block"
        {
            var posttimer = document.getElementById('countdown1');
            const start = 15;
            let time = start*60;
            let pre = setInterval(postruncountdown,1000);
            function postruncountdown()
            {
                const minutes = Math.floor(time/60);
            let seconds = time%60;
            seconds = seconds<10 ? '0'+seconds : seconds;
            posttimer.innerHTML = `${minutes}: ${seconds}`;
            time--;
            if(time<0)
        {
            clearInterval(pre)
            alert("Times Up!! Your Response Has Been Automatically Submited.");
            window.open('home.html',"_parent");
            }
        }
        }
        
    })
    function result1() 
    { 
    var score=0;
    if(document.getElementById("corr1").checked)
    {
        score++;
    }
    if(document.getElementById("corr2").checked)
    {
        score++;
    }
    if(document.getElementById("corr3").checked)
    {
        score++;
    }
    if(document.getElementById("corr4").checked)
    {
        score++;
    }
    if(document.getElementById("corr5").checked)
    {
        score++;
    }
     alert("Your Response Has Been Submited.");
        window.open("home.html");
    }
    function runcountdown()
    {
        const minutes = Math.floor(time/60);
        let seconds = time%60;
        seconds = seconds<10 ? '0'+seconds : seconds;
        countdown.innerHTML = `${minutes}: ${seconds}`;
        time--;
        if(time<0)
        {
            clearInterval(re)
            prelab.style.display='none';
            postlab.style.display = 'block';
            var posttimer = document.getElementById('countdown1');
            const start = 15;
            let time = start*60;
            let pre = setInterval(postruncountdown,1000);
            function postruncountdown()
            {
                const minutes = Math.floor(time/60);
            let seconds = time%60;
            seconds = seconds<10 ? '0'+seconds : seconds;
            posttimer.innerHTML = `${minutes}: ${seconds}`;
            time--;
            if(time<0)
        {
            clearInterval(pre)
            }
        }

    }

    
    }
    
