

    var success = function(){
        sweetAlert('Congratulations!', 'You have completed a module!', 'success');
    }
        
    var addCheckmark =function(el) {

        el = '#'+el;
        var height = $(el).parent().height();// use el to make sure check marks are the same size as the image it is replacing

        $('img',el).attr('src', 'images/check.png');// swap image
        $('img',el).attr('style', 'height:' + height + 'px');// set proper height
        $('i',el).attr('class', 'fa fa-check fa-5x');// swap icon
        $('i',el).attr('style', 'color:#00D400');// set icon color
    } 

    $(".content").click(function(e){
        e.preventDefault();

        var moduleRef = $(this).attr("id");
        var list = Cookies.getJSON()||{};
        list = _.pluck(list,"modules")[0]||[];

        list.push(moduleRef)
        Cookies.set('settings', {'modules': list}, {expires: 365});
        addCheckmark(moduleRef)
        
    });
   
    var storeVisited = function(){

        var obj = Cookies.getJSON()||{};

        _.each(_.pluck(obj,"modules")[0],function(value){
             addCheckmark(value)
        })
    };
    
     var  InitializationJsCarousel = function(obj){

                var carousel = $(obj).jcarousel({
                    list: '.jcarousel-list'
                });

                $(obj)
                    .on('jcarousel:create jcarousel:reload', function() {
                        var element = $(this),
                            width = element.innerWidth();

                        // This shows 1 item at a time.
                        // Divide `width` to the number of items you want to display,
                        // eg. `width = width / 3` to display 3 items at a time.
                        width = width / 1;
                        element.jcarousel('items').css('width', width + 'px');
                    })
                    .jcarousel({
                        // Core configuration goes here
                    });

                    $('.jcarousel-prev').jcarouselControl({
                        target: '-=1',
                        carousel: carousel
                    });

                    $('.jcarousel-next').jcarouselControl({
                        target: '+=1',
                        carousel: carousel
                    });
            }

            $( "#medicationImage" ).click(function(){
                InitializationJsCarousel('.jcarousel');
            });

            $(function(){
                $('#drop').find('span').click(function(e){
                $(this).parent().children('ol').toggle();
                });
            });