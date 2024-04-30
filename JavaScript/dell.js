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
