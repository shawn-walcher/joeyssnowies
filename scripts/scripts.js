var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var index;
  var slideArray = document.querySelectorAll(".mySlides");
  if (n > slideArray.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slideArray.length;
  }
  for (index = 0; index < slideArray.length; index++) {
    slideArray[index].style.display = "none";
  }
  slideArray[slideIndex - 1].style.display = "block";
}

setInterval(() => {plusDivs(+1)}, 5000);
