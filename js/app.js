$(function () {

  enableSelectBoxes();
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.for_slider'




  });
  $('.for_slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.multiple-items',
    fade: true,
    centerMode: true,
  });

  $('.ch-page-items').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    

    
  });

  $('.ch-page-items').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',

    
  });


  $('.astron_slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 1,        
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      
    ]

    
  });




  $('#discription').on('click', function () {
    $(".discription").show();
    $(".specifications").hide();
    $(".term_of_delivery").hide();



  })


  

  $('#specifications').on('click', function () {
    $(".specifications").show();
    $(".discription").hide();
    $(".term_of_delivery").hide();
    $('#discription').removeClass("active");
 
  })
  $('#term_of_delivery').on('click', function () {
    $(".specifications").hide();
    $(".discription").hide();
    $(".term_of_delivery").show();
    $('#discription').removeClass("active");
  

  })

  $('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
    }
    $('body').css({ "overflow": "auto"});
  });
  
  $('body').keypress(function(e) {
    if (e.key==37 || e.key==39)
    {
      console.log('Нельзя');
    }
  });
  
  $('.magnifier').click(function() {
    $('.popup-fade').css({ "display": "block"});
    $('body').css({ "overflow": "hidden"});

		$('.popup-fade').fadeIn();
		return false;
  });	
  

  

    function enableSelectBoxes(){
        $('.selectBox').each(function(){
            
          
     
            $(this).children('.selectArrow').click(function(){
                if($(this).parent().children('.selectOptions').css('display') == 'none')
                {
          
                    $(this).parent().children('.selectOptions').css('display','block');
                    $('.selectOptions') 
                    
                    $(this).parent().children('.selectArrow--off').css('display','block');
                    
                }
               
            });

            $(this).children('.selectArrow--off').click(function(){
                if($(this).parent().children('.selectOptions').css('display') == 'block')
                {
                   
                    $(this).parent().children('.selectOptions').css('display','none');
                  
                    $(this).parent().children('.selectArrow--off').css('display','none');
                }
              
            });
     
            
        });				
    }




})



