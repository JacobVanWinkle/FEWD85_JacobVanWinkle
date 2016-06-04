

$(document).ready(function(){
  $('.alert-message').hide();
});

$('input').keypress(function (e) {
  if (e.which == 13) {                                      //if enter (return key) was pressed, do this
    var imageUrl = $('input').val();                        //pass user inputted link to variable imageUrl
    if (imageUrl != '' && imageUrl.indexOf('://') != -1 ) { //checks if imageUrl is not equal to null and has "://" to verify link
      $('.container').css({
        'background': 'url("'+imageUrl+'") no-repeat',      //sets background image on wrapper; dont repeat
        'background-size': 'cover'                          //sets the background as 1 whole picture for the entire wrapper size
        });
      }
    else {
      $('.alert-message').slideDown().delay(1000).slideUp(); //if user pressed enter without entering any link 
    }                                                        // or entered invalid input, show error message for 1 second
  }
});
    