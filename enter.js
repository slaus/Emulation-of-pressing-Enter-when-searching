$('#inputText').on('keydown', function (e) {
    if (e.which == 13) {
      $(this).parent().find('#inputSubmit').trigger('click');
      return false;
    }
});
