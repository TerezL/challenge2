'use strict';

const ratingCard = document.querySelector('.rating');
const thankYouCard = document.querySelector('.hidden');
const submitButton = document.querySelector('.submit');
const paragraphText = document.querySelector('.selection');
const ratingCircles = document.querySelectorAll('.circle');
let rating;

ratingCircles.forEach(function (circle) {
  circle.addEventListener('click', function () {
    ratingCircles.forEach(function (ratingCircle) {
      if (circle === ratingCircle) {
        ratingCircle.classList.add('submit-clicked');
      } else {
        ratingCircle.classList.remove('submit-clicked');
      }
    });
    rating = Number(circle.textContent);
  });
});

submitButton.addEventListener('click', function () {
  if (!rating) {
    alert('Please select a rating before proceeding');
  } else {
    ratingCard.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
    paragraphText.textContent = `You selected ${rating} out of 5`;
  }
});
