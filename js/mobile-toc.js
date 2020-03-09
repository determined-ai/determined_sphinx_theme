window.mobileTOC = {
  bind: function() {
    $("[data-behavior='toggle-table-of-contents']").on("click", function(e) {
      e.preventDefault();

      if ($(this).hasClass("is-open")) {
        $(this).removeClass("is-open");
        $(".hamburger").removeClass("is-active");
        $(".pytorch-left-menu")
          .stop(true, true)
          .animate({ top: -100, opacity: 0 }, 200, function() {
            $(this).css({ display: '', top: '', opacity: '' });
            });
      } else {
        $(this).addClass("is-open");
        $(".hamburger").addClass("is-active");
        $(".pytorch-left-menu")
          .stop(true, true)
          .css({ display: 'block', top: '-100px', opacity: 0 })
          .animate({ top: 0, opacity: 1 }, 200);
      }
    });
  }
}
