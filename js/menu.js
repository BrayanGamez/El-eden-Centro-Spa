const slideLine =(e)=>
{
    brushListLine();
    if (e.target.className == "menu-home") 
    {
        $line1 = document.querySelector(".l1");
        $line1.style.backgroundColor = "#f9a392";
    }
    else if(e.target.className == "menu-shop")
    {
        $line2 = document.querySelector(".l2");
        $line2.style.backgroundColor = "#f9a392";
    }
    else if(e.target.className == "menu-features")
    {
        $line2 = document.querySelector(".l3");
        $line2.style.backgroundColor = "#f9a392";
    }
    else if(e.target.className == "menu-contac")
    {
        $line2 = document.querySelector(".l4");
        $line2.style.backgroundColor = "#f9a392";
    }
}

const brushListLine=()=>
{
    $listLine = document.querySelectorAll(".line");
    $listLine.forEach(Node => {
        Node.style.backgroundColor = "#a5a1a1";
    });
}

const littleFon = window.matchMedia('screen and (max-width:600px)');
littleFon.addListener(validar);
validar(littleFon);

function validar(event)
{
    $burgerbutton = document.querySelector(".button-hamburger-menu");
if (event.matches)
{
$burgerbutton.addEventListener('click',hideShow);
}
else
{
$burgerbutton.removeEventListener('click',hideShow);
}
}

function hideShow()
{
    $burger = document.querySelector(".menu");
if ($burger.classList.contains('hamburger-on'))
 {
    $burger.classList.remove('hamburger-on');
 }
 else
 {
    $burger.classList.add('hamburger-on');
 }
}


