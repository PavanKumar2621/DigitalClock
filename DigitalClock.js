let z;
function f()
{
    let d= new Date;
    let t=d.toLocaleTimeString();
    let x=document.getElementById("me");
    x.value=t;
}
function start()
{
    z= setInterval(f,1000);
}

function stop() {
    clearTimeout(z);
    document.getElementById("me").value ="Time Stopped ";
}
