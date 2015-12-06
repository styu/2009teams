$(document).ready(function() {
  $('.circle').click(function() {
    if (!$(this).hasClass('active')) {
      var team = $(this).attr("id");
      $(".circle").removeClass('active');
      $(".team").removeClass('active');
      $(this).addClass('active');
      $(".team." + team).addClass('active');
      $(".content").scrollTo($(".team." + team), 250);
    }
  });

  $(".teams .team").hover(function() {
    $(".teams .team").removeClass('active');
    $(".circle").removeClass('active');
    var team = $(this).attr("class").split(" ")[1];
    $(".circle." + team).addClass("active");
  }, function() {
    var team = $(this).attr("class").split(" ")[1];
    $(".circle." + team).removeClass("active");
  });
});