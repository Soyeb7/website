


function addLeadingZero(n) {
    if (n < 10) {
        n = "0" + n;
    }
    return n;
}

function windTheClock(timeZoneOffset)
{
    let d = new Date();
    d.setHours(d.getUTCHours() + timeZoneOffset); // set time zone offset
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h = addLeadingZero(h);
    m = addLeadingZero(m) ;
    s = addLeadingZero(s);
    document.all["clock"].innerHTML = "Jogwad time: "+ h + ":" + m + ":" + s ;
    setTimeout(function(){ windTheClock(timeZoneOffset) }, 1000);
}

window.onload = function() {
    windTheClock(5);
}
