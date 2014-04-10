// listens for the DOM to load
$(document).on('ready', function(){
	$(".userInfo").on("click", function() {
		$(this).hide();
		var inputVar = $('<input class="userInput">');
		var currentInfo = $(this);

		$(this).after(inputVar);
		inputVar.on('blur', function(){
			$(this).remove();
			currentInfo.show();
			( $(this).val() );
		});
	});

	// $(document).on("blur", ".userInput", function(){
	//	var inputVal = $(".userInput").val();
	//	$(this).text("inputVal");
	// });
});


// Requirements
// Part I

// Create a static user profile with HTML and CSS.
// Add a click handler to each text block.
// When a text block is clicked, hide the text block and display an input in its place. The input should take up the same space as the text block so that the transition from text to editable field is seamless and doesn't throw off the layout.
// When the input is blurred:
// Hide the input.
// Show the text block.
// Update the text block with the new text.
// Part II

// Refactor your code so that you can apply a class 'editable' to any element within your html and when the page loads your script will automatically make those elements in-place editable.

// Bonus I

// Implement in-place editing with with the X-Editable library. Ignore all the instructions for Ajax and POST requests and follow the note under "Work LOCALLY" to make it work client-side.