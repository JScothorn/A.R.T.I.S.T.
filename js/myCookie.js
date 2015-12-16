

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
        Cookies.set('settings', {'modules': list}, {expires: 7});
        addCheckmark(moduleRef)
        
    });

    var reset = function(){
        var list = Cookies.getJSON()||{};
        Cookies.remove('settings', {'modules': list}, {expires: 7});
        location.reload();
    }
   
    var storeVisited = function(){

        var obj = Cookies.getJSON()||{};

        _.each(_.pluck(obj,"modules")[0],function(value){
             addCheckmark(value)
        })
    };
    
$(window).load(function(){
      $('.flexslider').flexslider({
        slideshow: false,
        directionNav: true,
        itemWidth: 210,
        itemMargin: 5,
        maxItems: 1,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
    

  