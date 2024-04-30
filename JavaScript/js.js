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

