
const navitemdropdownlist = document.querySelectorAll('.nav-item-dropdown');
const navToggleropen = document.querySelector('.navbar-toggler-open');
const navTogglerclose= document.querySelector('.navbar-toggler-close');
const navcollapse =document.querySelector('.navbar-collapse');
const  loge = document.querySelector('.bte');






navitemdropdownlist.forEach((navItem)=>{
    navItem.addEventListener('click', () =>{
        //console.log(navItem); 
        navItem.nextElementSibling.classList.toggle('show-dropdown');
        if(navItem.firstElementChild.className == "fas fa-chevron-down"){
            navItem.firstElementChild.className = "fas fa-chevron-up";
        }
        else if (navItem.firstElementChild.className == "fas fa-chevron-up"){
            navItem.firstElementChild.className ="fas fa-chevron-down";
        }   
    })
})

//togler evvent
navToggleropen.addEventListener('click', () =>{
      navcollapse.classList.add('show-navbar');

 });
 navTogglerclose.addEventListener('click',() =>{
      navcollapse.classList.remove('show-navbar');
 });



    
    $('.vrfbt').click(function () {

        $('.communty-hom').animate({ height: "toggle" });
        
        });
        
        




    ///validation email login

            
/// verificati login acount

//displayin












