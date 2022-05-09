$(document).ready(function () {
  $.each($('.checkbox'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    };
  });
  $(document).on('click', '.checkbox', function (event) {
    if ($(this).hasClass('active')) {
      $(this).find('input').prop('checked', false);
    } else {
      $(this).find('input').prop('checked', true);
    };
    $(this).toggleClass('active');

    return false;
  });

  $.each($(".radiobutton__item"), function (index, val) {
    if ($(this).find('input').prop("checked") == true) {
      $(this).addClass('active');
    };
  });

  $(document).on('click', '.radiobutton__item', function (event) {
    allRadio = $(this).parents()['0'].children;
    for (child of Object.values(allRadio)) {
      $(child).removeClass("active");
      child.firstElementChild.checked = false;
    };

    $(this).toggleClass("active");
    $(this).find('input').prop('checked', true);
    return false;
  });
});