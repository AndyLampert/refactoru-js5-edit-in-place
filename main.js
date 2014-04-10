// listens for the DOM to load
$(document).on('ready', function(){
	$(".userInfo").on("click", function() {
		$(this).hide();
		// when I hide, I want to pull the text and put it in the input
		$(this).before().css(".userInput", "display:block");
	});


// <input id='input-id' class='input' type='text'>
// select the element and call .focus()


$("hidden input").on("blur", function(){
	var userInput = $("#input-id").val();
	$(this).text("#input-id");
			// get value with .val()
			// get the text with .text()
		});
});

// CSS is more declaritive/reusable. move to CSS
// (rule of thumb is that if it can be done in CSS, do it in CSS)
//	$(".userInfo").on("mouseover", function(){
//		$(this).css("cursor", "pointer");
//	});
// });


// Ask Raine
// How to get the input style to match the .userInfo block
// get hints on how to finish step 4:
// Hide the input.
// Show the text block.
// Update the text block with the new text.
