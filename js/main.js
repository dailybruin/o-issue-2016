$( document ).ready(function() {

  
  //lets get some google spreadsheet data :D
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/13EkyoRA9tyoefEb1A7-f4vKd94CyK_FijxxkbkW6CgI/od6/public/values?alt=json",
  	success: function(data) {
  			data = data.feed.entry;

        // The code below is for handlebars ---===
        // Retrieve the template data from the HTML (jQuery is used here).
        var template = $('#handlebars').html();
        // Compile the template data into a function
        var templateScript = Handlebars.compile(template);
        var context = data;
        // html = 'My name is Ritesh Kumar. I am a developer.'
        var html = templateScript(context);
        // Insert the HTML code into the page
        $("#handlebars-content").append(html);
  	}
  });


});
