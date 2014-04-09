$(".listener").click(function() {
	$(this).hide().after("<input class='input' type='text'><br>")
	.focus(function() {
		$(this).blur();
		});
});


// $( "input[type=text]" ).focus(function() {
//   $( this ).blur();
// });