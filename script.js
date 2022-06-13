var mybutton = document.getElementById('myBtn');

// When scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When click on the button, scroll to the top of the doc
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//dome
const Dome = document.getElementById('dome');
const Photo = document.getElementByClassName('.photo');


function show() {
  Dome.style.visibility = 'visible';
  Photo.style.visibility = 'visible';
}
function hide() {
  Dome.style.visibility = 'hidden';
  Photo.style.visibility = 'visible';
}
