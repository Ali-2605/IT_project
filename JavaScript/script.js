const display = document.getElementById('ali-display');
const factors = document.getElementById('ali-factors');
const ecosystem = document.getElementById('ali-ecosystem');
const performance = document.getElementById('ali-performance');
const premium = document.getElementById('ali-premium');
const rightImg = document.getElementById('rightImg');
const ali_body = document.getElementById('ali-body');

if (ali_body){
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

    function ali_saveText() {
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
// Abdullah Hesham's code

const as = document.getElementById("as");
const us = document.getElementById("us");
const linkbox = document.getElementById("linkbox");
const imgdiv = document.getElementById("imgdiv");
const lap = document.getElementById("asuslap");
const rectxt = document.getElementById("rectxt");
const recbut = document.getElementById("recbutto");
const tw = document.getElementById("tw");
const tb = document.getElementById("tb");
const asusform = document.getElementById("asus-form");
const onAsusStore = document.getElementById("asusStorebody");
const onAsus = document.getElementById("asusbody");


localStorage.setItem('abdullah', asusform);
var retrievedDataAsus = localStorage.getItem('abdullah');
console.log(retrievedDataAsus);



if (onAsusStore){
    tb.addEventListener('mouseover', function(){
        tb.style.opacity = "0";
    });
    
    tb.addEventListener('mouseout', function(){
            tb.style.opacity = "1";
    });
    
    tw.addEventListener('mouseover', function(){
        tw.style.opacity = "0";
    });
    
    tw.addEventListener('mouseout', function(){
            tw.style.opacity = "1";
    });
}


if (onAsus){
        as.addEventListener('mouseover', function(){
            as.style.opacity = "0";
        });
        
        as.addEventListener('mouseout', function(){
                as.style.opacity = "1";
        });
        
        us.addEventListener('mouseover', function(){
                us.style.opacity = "0";
        });
        
        us.addEventListener('mouseout', function(){
                us.style.opacity = "1";
        });
        
        imgdiv.addEventListener('mouseover', function(){
                linkbox.hidden = false;
                rectxt.style.animation = "rectrans 1s ease";
                recbut.style.animation = "imtrans 1s ease";
                lap.style.opacity = "0.3";
        });
        
        imgdiv.addEventListener('mouseout', function(){
                linkbox.hidden = true;
                lap.style.opacity = "1";
        });
        
}


var xx = 0;
function rot(){
    if (xx % 2 == 0){
    document.getElementById('arrow').style.transform = 'rotate(180deg)';}
    else {
    document.getElementById('arrow').style.transform = 'rotate(0deg)';
    }
    document.getElementById('arrow').style.transition = 'transform 0.3s linear';
    xx += 1;
}

var ii = 0;

function switchbc(){
    if (ii % 2 == 0){
        document.body.style.background = "linear-gradient(90deg, #000 50%, #fff 50%)";
        ii +=1;
    }
    else{
        document.body.style.background = "linear-gradient(90deg, #fff 50%, #000 50%)";
        ii+=1;
    }

}

// --------------------------------
// Shahd Sayed's code
localStorage.setItem('shahd', 'Hello, Shahd!');

var Dell = localStorage.getItem('shahd');

console.log(Dell); 

let dellbody1 = document.getElementById('dbody-1');
let dellbody2 = document.getElementById('dbody-2');

if (dellbody1){
var all_dell_links = document.getElementsByClassName("dell-link");
var all_dell_contents = document.getElementsByClassName("dell-contents");

   function opentab(dell_tab_name)
   {
     for (all_dell_link of all_dell_links){
       all_dell_link.classList.remove("active-link");
     }
     for (all_dell_content of all_dell_contents){
       all_dell_content.classList.remove("active-tab");
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(dell_tab_name).classList.add("active-tab")
   }

}
if (dellbody2){
  let dpreveiwContainer = document.querySelector('.dproducts-preview');
  let dpreviewBox = dpreveiwContainer.querySelectorAll('.dpreview');
  
  document.querySelectorAll('.dproducts-container .dproduct').forEach(dproduct =>{
    dproduct.onclick = () =>{
      dpreveiwContainer.style.display = 'flex';
      let name = dproduct.getAttribute('data-name');
      dpreviewBox.forEach(dpreview =>{
        let target = dpreview.getAttribute('data-target');
        if(name == target){
          dpreview.classList.add('active');
        }
      });
    };
  });
  
  dpreviewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      dpreveiwContainer.style.display = 'none';
    };
  });
  
  const dallStar = document.querySelectorAll('.drating .star')
  const dratingValue = document.querySelector('.drating input')
  
  dallStar.forEach((item, idx)=> {
    item.addEventListener('click', function () {
      let click = 0
      dratingValue.value = idx + 1
  
      dallStar.forEach(i=> {
        i.classList.replace('bxs-star', 'bx-star')
        i.classList.remove('active')
      })
      for(let i=0; i<dallStar.length; i++) {
        if(i <= idx) {
          dallStar[i].classList.replace('bx-star', 'bxs-star')
          dallStar[i].classList.add('active')
        } else {
          dallStar[i].style.setProperty('--i', click)
          click++
        }
      }
    })
  })
  
}
