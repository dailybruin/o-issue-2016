var backgroundImage = $("body").css("background");
$("body").css("background","none");

$( document ).ready(function() {
  //lets get some google spreadsheet data :D
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/13EkyoRA9tyoefEb1A7-f4vKd94CyK_FijxxkbkW6CgI/od6/public/values?alt=json",
  	success: function(data) {
  			data = data.feed.entry;


        $('#tile-container').css('width', data.length * 350);
        // The code below is for handlebars ---===
        // Retrieve the template data from the HTML (jQuery is used here).

        var template = $('#article').html();
        var templateScript = Handlebars.compile(template);
        var context = data;
        var html = templateScript(context);
        $("#handlebars-content").append(html);


        var template2 = $('#tile').html();
        var templateScript2 = Handlebars.compile(template2);
        var html2 = templateScript2(context);

        // $('#tile-container').css('width', 350 * data.length)
        $('#tile-container').append(html2);


        $('#tile-container').hover(function() {
          $('.tile').hover(function() {
            $(this).css({
              "opacity": "1"
            })
            $(this).siblings().css({
              "opacity" : "0.4"
            });
          });

        }, function() {
          $(this).children().css({
            "opacity" : "1"
          });
        });
  	}
  });



  //deep links
  $(document).ajaxStop(function() {
    currentURL = window.location.href;
    //check if # is in the url...
    if (currentURL.indexOf("#") != -1){
      articleID = currentURL.substring(currentURL.indexOf("#"), currentURL.length);
      withoutHash = articleID.substring(1, articleID.length)
      $(articleID).toggleClass("visible hidden");
      $("body").css("background","none");
    }
    else{
      $('#main-page').toggleClass("visible hidden");
      $("body").css("background", backgroundImage);
    }
  });

  //for main-page to article
  $(document).on('click', '.articleLink', function(e) {
      var articleID = $(this).attr('href')
      $(articleID).toggleClass("visible hidden");
      $('#main-page').toggleClass("visible hidden");
      window.history.pushState("", "", this.href);
      $("body").css("background","none");
      e.preventDefault();
  });

  //for article back to main-page
  $(document).on('click', '.button-one', function(e) {
      var articleID = $(this).parents().eq(2);
      $(articleID).toggleClass("visible hidden");
      $('#main-page').toggleClass("visible hidden");
      var url = (window.location.href ).substring(0, (window.location.href).indexOf("#"));
      window.history.pushState("", "", url);
      $("body").css("background", backgroundImage);
      e.preventDefault();
  });

});
