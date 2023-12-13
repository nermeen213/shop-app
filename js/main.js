
// *******************slider by owl carsoul************************

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true ,
    autoplayTimeout:5000,
   
    items:3,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



// *******************dark mode************************

let icon =document.getElementsByClassName('darkMode');
for(let i=0 ; i<icon.length ; i++){
    icon[i].addEventListener('click',function(){
        document.body.classList.toggle('dark-theme')
        if(document.body.classList.contains('dark-theme')){
            icon.classList.replace('fa-moon','fa-sun')
    
    
        }
        else{
            icon.classList.replace('fa-sun','fa-moon')
    
    
        }
        
    })
    

}
// *******************change navbar (scroll top & offset)************************


$(window).on('scroll',function(){
   let scrollTop= $(window).scrollTop()
   let offsetTop =$('#new').offset().top
   if(scrollTop>offsetTop){
    $('.navbar').css({'background-color':'var(--body-color)',
    "box-shadow": "rgba(0, 0, 0, 0.04) 0px 3px 5px"
})
   }else{
    $('.navbar').css({'background-color':'var(--main-color)',
    "box-shadow": "none"

})
   }

})








 

