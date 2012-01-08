$(document).ready(function() {
  $("form input").keyup(function() {
    var twss = $(this).val();

    if(twss.length > 0) {
      $.get("/", { "twss": twss }, function(data) {
        $("#twss").removeClass("no").removeClass("yes");

        if(data.twss) {
          $("#twss").text("YES").addClass("yes");
        } else {
          $("#twss").text("NO").addClass("no");
        }
      }, 'json');
    } else {
      $("#twss").removeClass("no").removeClass("yes");
      $("#twss").text("");
    }
  });
});
