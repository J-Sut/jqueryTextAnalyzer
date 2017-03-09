//globally declared variables


//function to calculate the total word count 
function calculateTotalWordCount(textInput) {
	var inputWords = textInput.split(" ");
	return inputWords.length;
}

//function to calculate the unique words submitted


//function to calculate the average word length in characters


//function to handle the form submission event
function submitForm () {
	$("form").submit(function(event){
		event.preventDefault();
		var textInput = $("textarea").val();
		var wordCount = calculateTotalWordCount(textInput);
		console.log(wordCount);
	});
}

//function to display the results 

$(function() {
	submitForm();
});