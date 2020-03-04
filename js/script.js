$(document).ready(function() {
  var width_screen = $(window).width();
  if (width_screen <=410) {
    $(".close-it").removeClass("fa-times");
    $(".close-it").addClass("fa-chevron-left");
  } else if (width_screen > 1400) {
    let diff = width_screen - 1400;
    if (diff > 0) {
      let red_wine = -242.717 + diff;
      let cart_modal =880 + diff;
      $(".red-wine-bg").css("left", red_wine);
      $(".cart-modal").css("left", cart_modal);
    }
  }

  //    cart-modal

  $(".modal-header ")
    .children(".close")
    .click(function(event) {
      if ($(".cart-modal").hasClass("closed")) {
      } else {
        $(".cart-modal").toggleClass("closed");
        $(".cart-modal").hide("slow");
      }
    });

  $(".cart-item")
    .children(".item-delete")
    .click(function(event) {
      $(".cart-item").hide();
    });

  $(".add-cart")
    .children(".btn-add")
    .click(function(event) {
      if ($(".cart-modal").hasClass("closed")) {
        $(".cart-modal").removeClass("closed");
        $(".cart-modal").show("slow");
      } else {
      }
    });

  $(".add-cart")
    .children(".btn-add")
    .click(function(event) {
      if ($(".cart-modal").hasClass("closed")) {
        $(".cart-modal").removeClass("closed");
        $(".cart-modal").show("slow");
      } else {
      }
    });
  // signup modal
  $(".signup-header")
    .children(".close")
    .click(function(event) {
      if ($(".signup-modal").hasClass("closed")) {
      } else {
        $(".signup-modal").toggleClass("closed");
        $(".signup-modal").hide("slow");
      }
    });

  $(".btn-profile").click(function(event) {
    if ($(".signup-modal").hasClass("closed")) {
      $(".signup-modal").removeClass("closed");
      $(".signup-modal").show("slow");
    } else {
    }
  });

  $(".btn-like").click(function(event) {
    $(this).toggleClass("liked");
    if ($(this).hasClass("liked")) {
      $(this)
        .children(".fa-heart")
        .css("color", "black");
    } else {
      $(this)
        .children(".fa-heart")
        .css("color", "red");
    }
  });
  $("#show-hide").click(function(event) {
    $(this)
      .toggleClass("closed")
      .siblings(".filter-content")
      .slideToggle(300);
  });
  // for filer mobile
  //  adjust top for the filter
  let hgt = $(window).height() - 53;
  $(".filter").css("top", hgt);
  $(".filter").click(function(event) {
    var divLocation = $(document).scrollTop();

    $(".filter-block-mobile")
      .show("slow")
      .animate({ top: divLocation }, 1000);
  });
  $(".filter-block-mobile")
    .children("#show-hide")
    .click(function(event) {
      $(".filter-block-mobile").hide("slow");
    });

  $(".filter-block-mobile")
    .children("#show-pays")
    .click(function(event) {
      $(this)
        .toggleClass("opened")
        .siblings(".pays-content")
        .slideToggle(300);
      //  $("#replace-sigin").html("+");
      if ($(this).hasClass("opened")) {
        $(this)
          .children("#replace-sigin")
          .html("-");
      } else {
        $(this)
          .children("#replace-sigin")
          .html("+");
      }
    });
  $(".filter-content-mobile")
    .children("#show-pays")
    .click(function(event) {
      $(this)
        .toggleClass("opened")
        .siblings(".pays-content")
        .slideToggle(600);
      //  $("#replace-sigin").html("+");
      if ($(this).hasClass("opened")) {
        $(this)
          .children("#replace-sigin")
          .html("-");
      } else {
        $(this)
          .children("#replace-sigin")
          .html("+");
      }
    });

  // show hide sorting list
  $("#show-pays").click(function(event) {
    $(this)
      .toggleClass("opened")
      .siblings(".pays-content")
      .slideToggle(300);
    //  $("#replace-sigin").html("+");
    if ($(this).hasClass("opened")) {
      $(this)
        .children("#replace-sigin")
        .html("-");
    } else {
      $(this)
        .children("#replace-sigin")
        .html("+");
    }
  });
  // show hide top header link
  $(".second-head").children("span").click(function(event) {
    $(".second-head")
      .toggleClass("opened")
      .siblings(".link-lists2")
      .slideToggle(300);
    //$("#replace-sigin").html("+");
    if ( $(".second-head").hasClass("opened")) {
      $(".second-head")
        .children("#replace-sigin")
        .html("-");
    } else {
      $(".second-head")
        .children("#replace-sigin")
        .html("+");
    }
  });

  $(".third-head").children("span").click(function(event) {
    $(".third-head")
      .toggleClass("opened")
      .siblings(".link-lists3")
      .slideToggle(300);
    // $("#replace-sigin").html("+");
    if ( $(".third-head").hasClass("opened")) {
      $(".third-head")
        .children("#replace-sigin")
        .html("-");
    } else {
      $(".third-head")
        .children("#replace-sigin")
        .html("+");
    }
  });
  $(".first-head").children("span").click(function(event) {
    $(".first-head").toggleClass("opened");
    $(".link-lists1").slideToggle(300);
    //$(".first-head").html("+");
    if ($(".first-head").hasClass("opened")) {
      $(".first-head")
        .children("#replace-sigin")
        .html("-");
    } else {
      $(".first-head")
        .children("#replace-sigin")
        .html("+");
    }
  });

  $(".show-menu").click(function(event) {
    if ($("#upper-content").is(":hidden")) {
      $("#close-upper").show("slow");
      $("#upper-content").slideDown("slow");
    } else {
      $("#close-upper").hide();
      $("#upper-content").slideUp("slow");
    }
  });

  $("#close-upper").click(function(event) {
    $("#close-upper").hide();
    $("#upper-content").slideUp("slow");
  });
  // singup modal

  $(".country-div")
    .children("fa-chevron-down")
    .click(function(event) {
      $("#ctry").show();
    });
});
