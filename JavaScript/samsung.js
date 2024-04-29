const display = document.getElementById('ali-display');
const factors = document.getElementById('ali-factors');
const ecosystem = document.getElementById('ali-ecosystem');
const performance = document.getElementById('ali-performance');
const premium = document.getElementById('ali-premium');
const rightImg = document.getElementById('rightImg');

function change(element){
    var divId = element.id;
    var textId = divId + '-p';
    var text = document.getElementById(textId);

    if (element.id === "ali-display") {
        factors.querySelector('p').style.maxHeight = '0';
        ecosystem.querySelector('p').style.maxHeight = '0';
        performance.querySelector('p').style.maxHeight = '0';
        premium.querySelector('p').style.maxHeight = '0';
        rightImg.src = '../photos/laptopDisplay.jpg';
    } 
    
    else if (element.id === "ali-factors") {
        display.querySelector('p').style.maxHeight = '0';
        ecosystem.querySelector('p').style.maxHeight = '0';
        performance.querySelector('p').style.maxHeight = '0';
        premium.querySelector('p').style.maxHeight = '0';
        rightImg.src = '../photos/laptopFactors.jpg';
    } 
    
    else if (element.id === "ali-ecosystem") {
        display.querySelector('p').style.maxHeight = '0';
        factors.querySelector('p').style.maxHeight = '0';
        performance.querySelector('p').style.maxHeight = '0';
        premium.querySelector('p').style.maxHeight = '0';
        rightImg.src = '../photos/laptopEcosystem.png';
    } else if (element.id === "ali-performance") {
        display.querySelector('p').style.maxHeight = '0';
        factors.querySelector('p').style.maxHeight = '0';
        ecosystem.querySelector('p').style.maxHeight = '0';
        premium.querySelector('p').style.maxHeight = '0';
        rightImg.src = '../photos/laptopPerformance.jpg';
    } else if (element.id === "ali-premium") {
        display.querySelector('p').style.maxHeight = '0';
        factors.querySelector('p').style.maxHeight = '0';
        ecosystem.querySelector('p').style.maxHeight = '0';
        performance.querySelector('p').style.maxHeight = '0';
        rightImg.src = '../photos/laptopPremium.png';
    }
    text.style.maxHeight = '200px'; // Adjust the height as needed

}


function scrollToDiv(id) {
    if(id == "samsungHeader"){
        var divName = 'ali-display';
        divId = document.getElementById(divName);     
        var position = divId.offsetTop;
    }
    else if(id == "tableHeader"){
        var divName = 'ali-introduction';
        divId = document.getElementById(divName);     
        var position = divId.offsetTop;
    }
    else{
        var divName = id + "-table";
        divId = document.getElementById(divName); 
        var position = divId.offsetTop - 50;
    } 
    window.scrollTo({
        top: position, 
        behavior: 'smooth'
    })
}

function copyText(element){
    text = element.innerHTML;
    navigator.clipboard.writeText(text);
    alert("Copied " + text + " to clipboard");
}
