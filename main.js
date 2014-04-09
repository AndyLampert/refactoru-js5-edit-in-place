// listens for the DOM to load
$(document).on('ready', function(){
	$(".userInfo").on("click", function() {
		$(this).hide();
		$(this).after("<input class='input' type='text'><br>");
		// $(this).on ("blur", function(){

		// });
	});
	$(".userInfo").on("mouseover", function(){
		$(this).css("cursor", "pointer");
	})
});


// When the input is blurred:
// Hide the input.
// Show the text block.
// Update the text block with the new text.

