$(document).ready(function)(){
  $(".sentence-form").submit(function(event){
    event.preventDefault();

    var sentence = $("#sentence").val();
    if (sentence) {
      var sentenceArray = sentence.split(" ";)//this will separate the words entered
      var longerThanThree = sentenceArray.filter(word=>word.length>=2);//this will create a new array (or sentence) with all the words that has passed the test (if it's more than two actual words)implemented by the provided function
      var stringLongerThanThree = longerThanThree.reverse().join(); //this will reverse an array in place. The first array element becomes the last, and the last array element becomes the first.
    }
  }
}
