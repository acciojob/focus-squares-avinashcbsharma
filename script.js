const square  = document.querySelectorAll('.square');
const square1 = document.querySelector('#square1');
const square2 = document.querySelector('#square2');
const square3 = document.querySelector('#square3');
  
square1.addEventListener('mouseover', function () {
	square2.classList.add('hover-state');
	square3.classList.add('hover-state');
});
square2.addEventListener('mouseover', function () {
	square1.classList.add('hover-state');
	square3.classList.add('hover-state');
});
square3.addEventListener('mouseover', function () {
	square1.classList.add('hover-state');
	square2.classList.add('hover-state');
});
  
square1.addEventListener('mouseout', function () {
	square2.classList.remove('hover-state');
	square3.classList.remove('hover-state');
});     
square2.addEventListener('mouseout', function () {
	square1.classList.remove('hover-state');
	square3.classList.remove('hover-state');
}); 
square3.addEventListener('mouseout', function () {
	square1.classList.remove('hover-state');
	square2.classList.remove('hover-state');
});