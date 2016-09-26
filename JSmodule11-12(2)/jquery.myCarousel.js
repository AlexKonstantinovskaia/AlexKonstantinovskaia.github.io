(function($) {
  $.fn.myCarousel = function(){
    var wrapper = $('<div class="carousel-wrapper"></div>');
    var control = $('<div class="carousel-control"><a class="left">Left</a><a class="right">Right</a></div>');
    var content = $('<div class="carousel-content"></div>');

    // console.log(this);
    $(this).after(wrapper);
    wrapper.append(content);
    wrapper.append(control);
    content.append($(this));
    $(this).children().addClass('carousel-element');


    var elementsList = $(this);
    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    control.find('a:first-child').click(function() {
         if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } 
    });
    control.find('a:last-child').click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } 
    });
    
  };
})(jQuery);

