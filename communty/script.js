
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

 
///comminity login label
const lables = document.querySelectorAll('.Form-control label')
lables.forEach(lable => {
    lable.innerHTML = lable.innerText
    .split('')
    .map((letter, idx) =>`<span 
    stayle="transition-delay:${idx *50}ms">${letter}</span>`)
    .join('')
})


/// heding div login
$('.join').click(function () {

    $('.fn').animate({ height: "toggle" });
    
    });
    
    $('.JOINy').click(function () {
    
    $('.verify').animate({ height: "toggle" });
    
    });
    //vfy
    function appendText() {
    
    var txt1 =   $("#inpemail").val();  
    
         
    
    $("#emailps").append(txt1); 
    
    }
    ///rfy
    const codes = document.querySelectorAll('.code')
    codes[0].focus()
    codes.forEach((code,indx)=>{
        code.addEventListener('krydown', (e)=>{
            if(e.key>=0 && e.key <=9){
                codes[indx].value =''
                setTimeout(()=> codes[indx + 1].focus(),10)
            } else if(e.key === 'Backspace'){
                setTimeout(()=> codes[indx - 1].focus(),10)

            }
        }) 
    })
