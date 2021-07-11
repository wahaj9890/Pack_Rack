

        $('.btn-view').click(function () {
             var pNode = $(this).next('.section-details').find('p');
            $(pNode[0]).slideToggle("slow");
            
        })

        $('.order-section').click(function (e) {
           var imgPath = $(this).parent().prevAll('.img-div').children().attr('src');
           console.log(imgPath);
           $('#itmImg').attr('src',imgPath);
           var titlHeading = $(this).prevAll('.title-section').find('.heading b').text();
           $('#popupTitle').text(titlHeading);
           var priceBuy= $(this).prevAll('.title-section').find('.sub-title').text();
           $('#popupPrice').text(priceBuy);
           
           
        })
       $('.order-btn').click(function (){
         $('#modelPopup').css('display', 'block');
        $('body').css('overflow','hidden');
        $('.activePage').css({'pointer-events' :'none', 'filter':'blur(5px)'});

       })
       $('.closeIcon').click(function(){
        $('body').css('overflow','initial');
        $('.activePage').css({'pointer-events' :'auto', 'filter':'blur(0px)'});

        $('#modelPopup').css('display', 'none'); 
       })