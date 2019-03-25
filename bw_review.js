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
window.onload = init;
var stars = document.querySelectorAll("span#stars img");
//define the event listeners used in the page
function init() {
      for (var i = 0; i < stars.length; i++) {
            stars[i].addEventListener("mouseenter", lightStars);
            stars[i].style.cursor = "pointer";
      }
      // document.getElementById("comment").addEventListener("keyup", count);

}

function lightStars(e) {

      var starNumber = e.target.alt;

      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }

      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating") = starNumber + " stars";
      e.target.addEventListener('mouseleave', turnOffStars)
}








/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}