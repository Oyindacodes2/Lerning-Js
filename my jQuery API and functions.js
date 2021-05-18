//to remove an existing class and add a new class when a click event is called
$(document).ready(function(){
    $('#btn').click(function(){
        $('.something').removeClass().addClass('jq_class');
    })
});

//adding a class horizontal to a the list in a specific div tag
$(document).ready(function() {
    $('#selected-plays > li').addClass('horizontal');
    });


  /*To add a class for all e-mail links, we construct a selector that looks for all
anchor elements (a) with an href attribute ([href]) that begins with mailto:
(^="mailto:"), as follows:*/

$(document).ready(function() {
    $('a[href^="mailto:"]').addClass('mailto');
    });

    /*Attribute selectors can be combined as well. We can, for example, add the class
henrylink to all links with an href value that both starts with http and contains
henry anywhere:*/

$(document).ready(function() {
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]')
    .addClass('henrylink');
    });
  

    //function to add a css class property to a specific child(odd) in a table row
    $(document).ready(function() {
        $('tr:nth-child(odd)').addClass('alt');
        });

       /* For one final custom-selector touch, let's suppose for some reason we want to
highlight any table cell that referred to one of the Henry plays. All we have to
do—after adding a class to the stylesheet to make the text bold and italicized
( .highlight {font-weight:bold; font-style: italic;} )—is add a line
to our jQuery code using the :contains() selector:*/

$(document).ready(function() {
$('tr:nth-child(odd)').addClass('alt');
$('td:contains(Henry)').addClass('highlight');
});
// for even class using the filter method
$('tr').filter(':even').addClass('alt');

/*To instead
style the cell next to each cell containing Henry, we can begin with the selector that
we have already written and simply call the .next() method on the result:*/
$(document).ready(function() {
$('td:contains(Henry)').next().addClass('highlight');
});

/*To include the original cell (the one that contains Henry) along with the cells that
follow, we can add the .addBack() method:*/
$(document).ready(function() {
$('td:contains(Henry)').nextAll().addBack()
.addClass('highlight');
});

/*There are a multitude of selector and traversal-method combinations by which we
can select the same set of elements. Here, for example, is another way to select every
cell in each row where at least one of the cells contains Henry:*/
$(document).ready(function() {
$('td:contains(Henry)').parent().children()
.addClass('highlight');
});

/*For example, our style switcher could be written using .click() instead of .on()
as follows:*/

$(document).ready(function() {
$('#switcher-default').addClass('selected');
$('#switcher button').click(function() {
var bodyClass = this.id.split('-')[1];
$('body').removeClass().addClass(bodyClass);
$('#switcher button').removeClass('selected');
$(this).addClass('selected');
});
});

/*Suppose that we wanted to be able to hide our style switcher when it is not needed.
One convenient way to hide advanced features is to make them collapsible. We will
allow one click on the label to hide the buttons, leaving the label alone. Another click
on the label will restore the buttons. We need another class as follows to handle the
hidden buttons:*/

$(document).ready(function() {
    $('#switcher h3').click(function() {
    $('#switcher button').toggleClass('hidden');
    });
    });

    /*for a hover effect to take effect in jquery*/

    $(document).ready(function() {
        $('#switcher h3').hover(function() {
        $(this).addClass('hover');
        }, function() {
        $(this).removeClass('hover');
        });
        });

   /* for changing the css property of a particular element e.g for in this case the width,margin,float*/
   
     $(document).ready(function(){
        $("#example_id").css("width",500);
        $("#example_id").css("margin","auto");
        $("#logo").css("float","left");
     });

     // jquery ajax that sends a request for contents in the specified remote page i.e index.html

       $(document).ready(function(){
           loadPage();
       })

         function loadPage(url){
             if(url==undefined){
                 $("body").append("<div id='progress'>Loading...</div>")
                 $("#container").load("index html #header ul", hijackLinks);  //ajax code
             }else{
                 $("#container").load(url+ "#content ",hijackLinks);
             }
         }

         function hijackLinks(){
            $("container a").click(function(e){
                e.preventDefault();
                loadPage(e.target.href);
            });
         }

     

     