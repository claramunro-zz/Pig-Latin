
function isVowel(c){
  var vowelChar=false;
  var vowels=["A","E","I","O","U"];
  vowels.forEach(function(vowel) {
    if (c==vowel) {
      vowelChar = true;
    };
  });
  return vowelChar;
}
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isCont(c) {

}


$(document).ready(function() {
  $("#pigLatinForm").submit(function(event) {
    event.preventDefault();

    var inputSentence = $("#inputSentence").val().toUpperCase();
    var sentenceArray = [];
    var sentenceArray = inputSentence.split(" ");
    var newWordArray = [];
    var newWordArray2 = [];

    newWordArray = sentenceArray.map(function(word) {
      var firstChar = word.charAt(0);
      if (isLetter(firstChar) &&  !isVowel(firstChar)) {
          word += firstChar + "AY";
          word = word.substring(1);
          console.log(word);
      }
      return word;
    });

    console.log(newWordArray);


    newWordArray2 = newWordArray.map(function(word) {
      var firstChar = word.charAt(0);
      if ( isVowel(firstChar) ) {
          word += "WAY";
      }
      console.log(word);
      return word;
    });

    // newWordArray3 = newWordArray2.map(function(word) {
    //   var firstChar = word.charAt(0);
    //   is ( isCont(newWordArray[i])) {
    //     move conts to end
    //   }
    // });

});
});
    // for (var i=0; i < sentenceArray.length; i++) {
    //   var vowels = ["A", "E", "I", "O", "U"];
    //   var firstChar = sentenceArray[i].charAt(0);
    //
    //     if (firstChar == "A" || firstChar == "E" || firstChar == "I" || firstChar == "O" || firstChar == "U") {
    //     var newWord = "" + sentenceArray[i] + "WAY";
    //     // newWordArray.push(newWord);
    //     // console.log(newWordArray);
    //
    //     // console.log(newWordArray);
    //     var pig = sentenceArray[i].replace(sentenceArray[i], newWordArray);
    //
    //     console.log(pig);
    //     console.log(sentenceArray);
    //     // return pig;
    //     }
      // else if (firstChar !== "A" || firstChar !== "E" || firstChar !== "I" || firstChar !== "O" || firstChar !== "U") {
      //     alert("consonant!");
      //   }
      //     else {
      //       alert("Please enter text");
      //     }
      // };
  // });
  // });
