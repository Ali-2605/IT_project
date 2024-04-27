function containsNumber(str) {
  // Check if the string contains any digit between 0 and 9
  return str.match(/\d+/) !== null;
} 
function containsChar(str) {
  // Check if the string contains any digit between 0 and 9
  return str.match(/[a-zA-Z]/) !== null; 
//   check /[a-zA-Z]/
}
function user_login(){
    var user= document.getElementById('username');
    var pas= document.getElementById('password');
    var x= user.value;
    var y= pas.value;
    if(x.length>=10){
        alert("write less than 10 char in username");
    }
    else if(!containsChar(x)){
        alert("write alphabet in username");
    }
    else if(y.length<=8){
        alert("write more than 8 char in password");
    }
    else if(!containsNumber(y)){
        alert("write number in password");
    }
    else if(!containsChar(y)){
        alert("write alphabet in password");
    }
    else{
        window.open("home.html");
    }
    
}