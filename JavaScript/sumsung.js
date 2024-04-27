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
        rightImg.src = '../photos/laptopPremium.jpg';
    }
    text.style.maxHeight = '200px'; // Adjust the height as needed


    // Function to scroll to a specific section
    function scroll(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
        }
    }


    const budget = document.getElementById('ali-budget');
    const mid = document.getElementById('ali-mid');
    const high = document.getElementById('ali-high');
    const special = document.getElementById('ali-special');

    // Add click event listeners to the divs
    budge.addEventListener('click', function() {
        scrollToSection('section2'); // Scroll to section 2 when section 1 is clicked
    });

    document.getElementById('section2').addEventListener('click', function() {
        scrollToSection('section3'); // Scroll to section 3 when section 2 is clicked
    });


}