
// Fades in the description on hover
$('.description').hover(
  function () {
    $(this).addClass('view-description');
  },
  function () {
  	$(this).removeClass('view-description');
  }
);