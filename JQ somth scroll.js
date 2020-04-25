$(document).ready(() => {
  // $("#btn").click(() => {
  //   $("html,body").animate({
  //     scrollTop: $("#racipes").offset().top - 100,
  //   });
  // });
  $(".nav-contact").click(() => {
    console.log("contact");
    $("html,body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      "slow"
    );
  });
  $(".active").click(() => {
    $("html,body").animate(
      {
        scrollTop: $("#menu").offset().top - 100,
      },
      "slow"
    );
  });
  $(".home").click(() => {
    $("html,body").animate(
      {
        scrollTop: $("body").offset().top,
      },
      "slow"
    );
  });
});
