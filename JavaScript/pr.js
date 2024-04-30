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