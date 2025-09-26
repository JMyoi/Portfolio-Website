    let Darkmode = false;

function darkMode(){

    //switch button to light mode icon.
    let Icon = document.getElementById("darkModeIcon");
    let mode = Icon.getAttribute("src");
    if(mode == "./Images/DarkMode.png"){
        //change to light mode icon
        console.log("change to light mode icon");
        Icon.setAttribute("src", "./Images/moon.png");
    }
    else{
        Icon.setAttribute("src", "./Images/DarkMode.png");
    }

    console.log("switching to dark mode");
    var ELEMENT = document.body;
    ELEMENT.classList.toggle("darkMode");

    //change header-links to white text
    let HeaderLinks = document.getElementsByClassName("headerText");
    for(let i = 0; i<HeaderLinks.length; i++){
        HeaderLinks[i].classList.toggle("headerLinks");
    }
    


    //take out cloud picture and make it night sky
    document.getElementById("Experience").classList.toggle("ExperienceDarkMode");
    //make boarder circles white for dates
    let dates = document.getElementsByClassName("date");
    for(let i = 0; i<dates.length; i++){
        dates[i].classList.toggle("dateDarkMode");
    }

    //change skills section background ot dark chalk board
    document.getElementById("skills").classList.toggle("skillsDarkMode");

    //change footer background color
    document.getElementById("footer").classList.toggle("footerDarkMode");

    //change project card shadow to white
    let projectCard = document.getElementsByClassName("projectCard");
    for(let i = 0; i<projectCard.length; i++){
        projectCard[i].classList.toggle("projectCardDarkMode");
    }
}