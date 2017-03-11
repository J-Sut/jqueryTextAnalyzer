//function to calculate the total word count 
function calculateTotalWordCount(textInput) {
	var inputWords = textInput.split(" ");
	return inputWords.length;
}

//function to calculate the unique words submitted
function calculateUniqueWords(textInput) {
	var inputWords = textInput.split(" ");
	var sortedWords = inputWords.sort();
	var finalUniqueList = []
	for (i = 0; i <= sortedWords.length; i++) {
		if (sortedWords[i] !== sortedWords[i+1]) {
			finalUniqueList.push(sortedWords[i])
		}
	}
	//console.log("final uniqueWords list " + finalUniqueList)
	//console.log(finalUniqueList.length);
	return finalUniqueList.length;
};


//function to calculate the average word length in characters
function calculateWordLength(textInput, wordCount) {
	var totalCharacters = textInput.split(' ').join('');
	//return the length property of the array and divide it by the word count
	//console.log(totalCharacters.length/wordCount);
	return totalCharacters.length/wordCount;
}


//function to handle the form submission event
function submitForm () {
	$("form").submit(function(event){
		event.preventDefault();
		var textInput = $("textarea").val().toLowerCase().replace(/[.,?\/#!$%\^&\*;:{}=\-_'`~()]/g,"");
		var wordCount = calculateTotalWordCount(textInput);
		var uniqueWords = calculateUniqueWords(textInput);
		var avgWordLength = calculateWordLength(textInput,wordCount);
		//console.log(wordCount, uniqueWords, avgWordLength);
		displayResults(wordCount, uniqueWords, avgWordLength);
	});
}

//function to display the results 
function displayResults(wordCount, uniqueWords, avgWordLength) {
	console.log(wordCount, uniqueWords, avgWordLength);
	$('.text-report').removeClass('hidden');
	$('dd[class="count"]').text(wordCount);
	$('dd[class="unique"]').text(uniqueWords);
	$('dd[class="avg"]').text(avgWordLength.toFixed(2));
};	

//call the submit form function
$(function() {
	submitForm();
});