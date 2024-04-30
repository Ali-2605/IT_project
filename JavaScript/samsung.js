const display = document.getElementById('ali-display');
const factors = document.getElementById('ali-factors');
const ecosystem = document.getElementById('ali-ecosystem');
const performance = document.getElementById('ali-performance');
const premium = document.getElementById('ali-premium');
const rightImg = document.getElementById('rightImg');

function ali_display(element){
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
    text.style.maxHeight = '200px';
}


function ali_scrollToDiv(id) {
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

function ali_copyText(element){
    text = element.innerHTML;
    navigator.clipboard.writeText(text);
    alert("Copied " + text + " to clipboard");
}

const textInput = document.getElementById('textInput');
const displaiedText = document.getElementById('displayText');

const savedText = localStorage.getItem('savedText');
if (savedText) {
    displaiedText.textContent = "Hello, " + savedText;
}
textInput.addEventListener('keyup', function() {
    displaiedText.textContent = "Hello, " + this.value;
  });

function saveText() {
    const inputText = textInput.value.trim(); 
    if (inputText) {
        displaiedText.textContent ="Hello, " + inputText; 
        localStorage.setItem('savedText', inputText); 
        textInput.value = ''; 
    }
};

function ali_search() {
    var searchText = document.getElementById("searchText").value;
    var elementsToSearch = document.querySelectorAll('p, h1, h2, h3, strong'); 
    var pattern = new RegExp(searchText, "g");
    var matches = 0;
    var result = document.getElementById("result");
  
    document.querySelectorAll('.highlight').forEach(function (highlightedElement) {
      highlightedElement.classList.remove('highlight'); 
    });
  
    elementsToSearch.forEach(function(element) {
      var textContent = element.textContent;
      element.innerHTML = textContent.replace(pattern, function(match) {
        matches++;
        return '<span class="ali-highlight">' + match + '</span>';
      });
    });

    if (searchText == ""){
        result.innerHTML = "";
    }
    else if (matches > 0) {
        result.innerHTML = "Found " + matches + " matches";
    } else {
        result.innerHTML = "No matches found";
    }
}  




// -------------------------------------------------------------------------------------
// Doha's code

function d_containsNumber(str) {
    return str.match(/\d+/) !== null;
  } 
  function d_containsChar(str) {
    return str.match(/[a-zA-Z]/) !== null; 
  }
  
  
  localStorage.setItem('dohajs','doha');
  var doha = localStorage.getItem('dohajs');
  
  function user_login(){
      var d_user= document.getElementById('username');
      var d_pas= document.getElementById('password');
      var d_x= d_user.value;
      var d_y= d_pas.value;
      if(d_x.length>=10){
          alert("write less than 10 char in username");
      }
      else if(!d_containsChar(d_x)){
          alert("write alphabet in username");
      }
      else if(d_y.length<=8){
          alert("write more than 8 char in password");
      }
      else if(!d_containsNumber(d_y)){
          alert("write number in password");
      }
      else if(!d_containsChar(d_y)){
          alert("write alphabet in password");
      }
      else{
          window.open("home.html");
      }
  }

  function d_containsNumber(str) {
    return str.match(/\d+/) !== null;
  } 
  function d_containsChar(str) {
    return str.match(/[a-zA-Z]/) !== null; 
  }
  
  
  localStorage.setItem('dohajs','doha');
  var doha = localStorage.getItem('dohajs');
  
  function user_login(){
      var d_user= document.getElementById('username');
      var d_pas= document.getElementById('password');
      var d_x= d_user.value;
      var d_y= d_pas.value;
      if(d_x.length>=10){
          alert("write less than 10 char in username");
      }
      else if(!d_containsChar(d_x)){
          alert("write alphabet in username");
      }
      else if(d_y.length<=8){
          alert("write more than 8 char in password");
      }
      else if(!d_containsNumber(d_y)){
          alert("write number in password");
      }
      else if(!d_containsChar(d_y)){
          alert("write alphabet in password");
      }
      else{
          window.open("home.html");
      }
      
  }

//--------------------------------------------------------------------------------------------------------
// Sama Tarek's Code
function search(){
    let searchbar =document.querySelector('.search-input').aValue.toLocaleUpperCase;
    let productlist =document.querySelector('product-list');
    let product =document.querySelectorAll('product');
    let productname =document.getElementsByName('h2');

    for (let i = 0; i<productname.length; i++){
        if(productname[i].innerHTML.toLocaleUpperCase().indexOf(searchbar) >= 0){
            product[i].style.display = "";
        } else{
            product[i].style.display = "non";
        }
    }
}

var z = 0;
 function change(){
    
     if (z % 2 == 0){
        document.body.style.backgroundColor="gray"; 
     z +=1;
    }
    else{
        document.body.style.backgroundColor="white";
        z +=1;
 }
    
}

var b=0;
function change2(){

    if (b % 2 == 0){
        document.body.style.color="blue"; 
        b +=1;
    }
    else{
        document.body.style.color="black";
        b +=1;
    }
}

// --------------------------------------------------------------

