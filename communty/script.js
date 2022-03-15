
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
    document.getElementById("communtyco").style.display = "none";
    document.getElementById("communtyjoin").style.display = "block";



   
    
    });
    
    $('.JOINy').click(function () {
    
        document.getElementById("communtyco").style.display = "none";
        document.getElementById("communtyjoin").style.display = "block";
    
    });
    $('.joinbnt').click(function () {
    
        document.getElementById("communtyjoin").style.display = "none";
        document.getElementById("communtyvrif").style.display = "block";
    
    });
    $('.joinbnt').click(function () {
    
        document.getElementById("comuntyhom").style.display = "none";
        document.getElementById("comuntyhom").style.display = "block";
    
    });
    //vfy
    function appendText() {
    
    var txt1 =   $("#inpemail").val();  
    
         
    
    $("#emailps").append(txt1); 
    
    }
    //vfy
    function appendText() {
    
    var txt1 =   $("#inpemail").val();  
    
         
    
    $("#emailps").append(txt1); 
    
    }

    //
    function appendprof() {
    
        var nomprof =   $("#nmprfl").val();  
        
             
        
        $(".h3prof").append(nomprof); 
        
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
    //email valadtion  for better user experince 

    $(document).ready(function () {
        $(".emailinp").keydown(function () {
            var input = $(".emailinp").val();
    
    var regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    
    
    
    if(!regex.test(input) )
    
    {
       
    
      $(".emailinp").css("color", "rgb(241, 75, 75)");
    
    }else{
        $(".emailinp").css("color", "#fff");
    }
        })

       })

       $(document).ready(function(){

        $("#number").blur( function(){
            
            if($("#number").val() == ""){
                alert("plan code")
    
            }
    
            
        }) 
    })
    function appendText() {
    
        var txt1 =   $("#inpemail").val();  
        
             
        
        $("#emailps").append(txt1); 
        
        }
    
        //
        function appendprof() {
        
            var nomprof =   $(".emailinpvr").val();  
            
                 
            
            $("#emailps").append(nomprof); 
            
            }
    
    
    
