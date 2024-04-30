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
