$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".header-wrapper").addClass("fixed");
  } else {
    $(".header-wrapper").removeClass("fixed");
  }
});
$(document).ready(function () {
  $(".menu-icon").click(function (event) {
    $("header nav ul").toggleClass("open");

    // Add or remove overflow hidden directly in JavaScript
    if ($("header nav ul").hasClass("open")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }

    event.stopPropagation(); // Prevent click from bubbling to document
  });

  // Close when clicking outside the sidebar
  $(document).click(function (event) {
    if (!$(event.target).closest("header nav ul, .menu-icon").length) {
      $("header nav ul").removeClass("open");
      $("body").css("overflow", "auto"); // Restore scrolling
    }
  });

  // Close when clicking on a link inside the sidebar
  $("header nav ul li a, .close").click(function () {
    $("header nav ul").removeClass("open");
    $("body").css("overflow", "auto"); // Restore scrolling
  });
});
