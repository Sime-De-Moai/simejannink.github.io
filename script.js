window.smoothScroll = function(target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { 
        if (target == scrollContainer) break;
        targetY += target.offsetTop - 50;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 1);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

function change_1()
{
document.getElementById("h_1").style.visibility="visible";
}
function changeB_1()
{
document.getElementById("h_1").style.visibility="hidden";
}


function change_2()
{
document.getElementById("h_2").style.visibility="visible";
}
function changeB_2()
{
document.getElementById("h_2").style.visibility="hidden";
}


function change_3()
{
document.getElementById("h_3").style.visibility="visible";
}
function changeB_3()
{
document.getElementById("h_3").style.visibility="hidden";
}


function change_4()
{
document.getElementById("h_4").style.visibility="visible";
}
function changeB_4()
{
document.getElementById("h_4").style.visibility="hidden";
}


function change_5()
{
document.getElementById("h_5").style.visibility="visible";
}
function changeB_5()
{
document.getElementById("h_5").style.visibility="hidden";
}

function change_6()
{
document.getElementById("h_6").style.visibility="visible";
}
function changeB_6()
{
document.getElementById("h_6").style.visibility="hidden";
}

function change_7()
{
document.getElementById("h_7").style.visibility="visible";
}
function changeB_7()
{
document.getElementById("h_7").style.visibility="hidden";
}

function change_8()
{
document.getElementById("h_8").style.visibility="visible";
}
function changeB_8()
{
document.getElementById("h_8").style.visibility="hidden";
}

function change_9()
{
document.getElementById("h_9").style.visibility="visible";
}
function changeB_9()
{
document.getElementById("h_9").style.visibility="hidden";
}