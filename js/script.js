$(document).ready(function() {

            $('hoverOver').hover(
				
               function () {
                  $(this).css({"background-color":"red"});
               }, 
				
               function () {
                  $(this).css({"background-color":"blue"});
               }
            );
				
         });