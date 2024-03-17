$(document).ready(function(){
    $(".btn_wrap .btn").click(function () {
        $(".fixed").fadeIn("slow");
      });

    $(".fixed .back").click(function () {
        $(".fixed").fadeOut("slow");
      });


      $(".btn_wrap .btn_2").click(function () {
        $(".alr").fadeIn("slow");
      });

    $(".alr .back_2").click(function () {
        $(".alr").fadeOut("slow");
      });

      
});