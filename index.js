$(document).ready(function () {

// LOADER FUNCTION
 $('#loader').fadeOut('slow');  

// SLIDING SIDE BAR FUNCTION
$(".side-left-hover-container").hover(
    function () {
        $(".side-left-cont-slide").addClass("active");
    },
    function () {
        $(".side-left-cont-slide").removeClass("active");
    }
); 
    
// SHOWING CONFIRMATION CARD FUNCTION
$('#confirm').hide();
$('.confirm-btn').click(
    function() {
        $('#confirm').fadeIn();
});
$('#confirm, .nobtn').click(
    function(event) {
       if (event.target !== this) return;
       $('#confirm').fadeOut();
});
$('#logoutLink').click(
    function() {
      localStorage.setItem("user", null)
      window.location.href="../index.html"
});

// DYNAMIC EDIT FORM FUNCTION
$('#editable').hide();
$('#edit-btn').click(function() {
  var buttonText = $('#edit-btn').text().trim();
  if (buttonText === 'Edit') {
    $('#edit-btn').html('Cancel <i class="fa fa-trash"></i>');
    $('#not-editable').hide();
    $('#editable').show();
  } else {
    $('#edit-btn').html('Edit <i class="fa fa-edit"></i>');
    $('#editable').hide();
    $('#not-editable').show();
  }
});

});