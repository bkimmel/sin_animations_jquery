$.fn.equalizeHeights = function() {
  $(this).each(function(i, e){
    if(i === 1)
    {
       var x = ((2 * Math.PI)/300);
       var si = setInterval(function() {
         x = x + ((2 * Math.PI)/300);
         console.log((30 + (100 * Math.sin(x))));
         $(e).finish();
         $(e).animate({
             height : (201 + (200 * Math.sin(x))) + ''
         }, 'linear');
       }, 40);
    }
    else
    {
      $(e).animate({height : (20 * Math.pow(2, i)) + '', opacity: 0.5});
    }
  });
  
  
};



$('input').click(function(){  $('div').equalizeHeights();}); 