$("h1").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });




  $(document).ready(function () {
    // Use mouseenter and mouseleave instead of hover
    $("img").on("mouseenter", function () {
      $(this).animate({ width: "80%" }, 300); // 300 milliseconds duration
    }).on("mouseleave", function () {
      $(this).animate({ width: "60%" }, 300); // 300 milliseconds duration
    });
  });