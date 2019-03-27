"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: mickal Austin
   Date:  3-14-19 
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init();


//defines the event listeners used in the page
function init() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);

      }
      document.getElementById("comment").addEventListener("keyup", updateCount);

}
//star changes from white to yellow
function lightStars(e) {
      var stars = document.querySelectorAll("span#stars img");
      var starNumber = e.target.alt;



      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = starNumber + " stars";
      e.target.addEventListener('mouseleave', turnOffStars);
      e.target.addEventListener('click', function () {
            e.target.removeEventListener('mouseleave', turnOffStars)
      })
}
//the stars changes back to white
function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
            document.getElementById('rating').value = "";
      }
}
//this function updates the word count typed within the text area box.
function updateCount() {
      var commentText = document.getElementById('comment').value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      //when the character count exceeds 1000 the count number box will change to red on white to indicate the user has exceeded the limit 
      if (charCount > 1000) {
            wordCountBox.style.backgroundColor = 'red';
            wordCountBox.style.color = "white";
            //when the user goes back to a number less than 1000 the color goes back
      } else {
            wordCountBox.style.backgroundColor = 'white';
            wordCountBox.style.color = "black";
      }

}








/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}