$( document ).ready(function() {

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
        $('#tile-container').append(html2);



  	}
  });

  //for page transition to article
  $(document).on('click', '.link', function(e) {
      console.log($(this).attr('href'));
      var articleID = $(this).attr('href')
      $(articleID).removeClass('hidden');
      $("#main-page").addClass('hidden');
      e.preventDefault();
  });

});
