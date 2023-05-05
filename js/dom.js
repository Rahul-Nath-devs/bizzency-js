$(function(){

    let searchIcon = $(`.searchIcon`)
    let seacrhBar = $(`.search`)
    searchIcon.click( function(){

     seacrhBar.toggleClass(`visible`)  
     
     if(seacrhBar.hasClass(`visible`) == true){
       
       searchIcon.html( ` <i class="fa-regular fa-circle-xmark"></i> `)
     }else{
       searchIcon.html( `<i class="fa-solid fa-magnifying-glass"></i>`)
     }


        
    }) 

          //*Menu fixed
     
          let navbar = $(`.Navbar`)
           let showButton = $(`.backToTop`)
          $(window).scroll(function(){
            
          let scrollTopValue = $(window).scrollTop()

          if(scrollTopValue > 800){
           navbar.addClass(`menuFixed`)
           showButton.addClass(`btnShow`)
          }else{
           navbar.removeClass(`menuFixed`)
           showButton.removeClass(`btnShow`)
          }
         

          })

          // back to top button

          let BackToTop = $(`.backToTop button`)

          BackToTop.click(function(){
          $(`html,body`).animate({

            scrollTop:0
          },300)
            
          })
           
          let preLoader= $(`.preloader`)
          $(window).on(`load` ,function(){
             preLoader.fadeOut()
          })
      
    
})


