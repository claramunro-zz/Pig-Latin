
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
    console.log(sentenceArray);


    // words starting with C's, move character to end & add AY
    newWordArray = sentenceArray.map(function(word) {
      var firstChar = word.charAt(0);
//    var secondChar = word.charAt(1);

      if (isLetter(firstChar) &&  !isVowel(firstChar) || firstChar === "Q" && secondChar === "U") {
      //   words starting with QU, move to end & add AY

      //   if (firstChar === "Q"  &&  secondChar === "U") {
         //      if (there is no procesing C) {
         //        delete first two characters;
         //        add "QUAY" to end;
         //     }
         //     if (there are proceeding C's add these to the QU){
         //        delete first two characters;
         //        add "C's" + "QUAY" to end;
         //     }
         //     }
      //  else {
          word += firstChar + "AY";
          word = word.substring(1);
          console.log(word);
      // }
      }
      return word;
    });
    console.log(newWordArray);


// words starting with V's, move to end & add WAY
    newWordArray2 = newWordArray.map(function(word) {
      var firstChar = word.charAt(0);
      if ( isVowel(firstChar) ) {
          word += "WAY";
      }
      console.log(word);
      return word;
    });
    console.log(newWordArray2);


    // newWordArray3 = newWordArray2.map(function(word) {
    //   var firstChar = word.charAt(0);
    //   is ( isCont(newWordArray[i])) {
    //     move conts to end
    //   }
    // });

});
});
