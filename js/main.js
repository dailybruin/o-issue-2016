$( document ).ready(function() {
  $(document).one("mobileinit", function () {
    // Setting #container div as a jqm pageContainer
    $.mobile.pageContainer = $('#container');
    // Setting default page transition to slide
    $.mobile.defaultPageTransition = 'fade';
  });

  //lets get some google spreadsheet data :D
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/13EkyoRA9tyoefEb1A7-f4vKd94CyK_FijxxkbkW6CgI/od6/public/values?alt=json",
  	success: function(data) {
  			data = data.feed.entry;

        // The code below is for handlebars ---===
        // Retrieve the template data from the HTML (jQuery is used here).
        var template = $('#article').html();
        // Compile the template data into a function
        var templateScript = Handlebars.compile(template);
        console.log(templateScript)
        var context = data;
        // html = 'My name is Ritesh Kumar. I am a developer.'
        var html = templateScript(context);
        // Insert the HTML code into the page
        $("#handlebars-content").replaceWith(html);



        var template2 = $('#thumbnail').html();
        var templateScript2 = Handlebars.compile(template2);
        var html2 = templateScript2(context);
        console.log(html2);
        $('#tile-container').append(html2);



  	}
  });




});
