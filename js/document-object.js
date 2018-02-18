'use strict';

console.log(document.URL);
console.log(document.title);

console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[0].textContent);

var headerElement = document.body.children[0];
headerElement.textContent = 'Something else!';
headerElement.style.backgroundColor = 'black';
headerElement.style.color = 'white';

console.log(document.body.children[1].children[0]);

console.log(document.body.firstChild); // the white space before the first element, not what you'd expect
console.log(document.body.firstElementChild); // this gets what you would expect
console.log(document.body.lastElementChild);

console.log(document.body.children[1].firstElementChild.nextElementSibling);
console.log(document.body.children[1].firstElementChild.parentElement);

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('simple'));
console.log(document.getElementById('myLink'));

console.log(document.querySelector('h1'));
console.log(document.querySelector('#myLink'));
console.log(document.querySelector('.simple')); // only returns one item
console.log(document.querySelectorAll('.simple')); // returns all that match

document.querySelector('.simple').style.backgroundColor = 'red';
document.querySelectorAll('.simple')[0].style.color = 'white';

// get to the link in the second list item element
document.querySelectorAll('li')[0].nextElementSibling.firstElementChild.textContent = 'Hello';

var p = document.createElement('p');
p.textContent = 'A new paragraph';
p.style.fontSize = '16px';
console.log(p);

var li = document.querySelector('li');
var a = li.firstElementChild;

li.appendChild(p);
li.insertBefore(p, a);

var a = document.querySelectorAll('a')[1];

// cross browser working method of element deletion
//a.parentElement.removeChild(a);

// parent node could be something that isn't an HTML element
// HTML elements are HTML nodes, but not all HTML nodes are HTML elements
//a.parentNode.removeChild(a);

// only supported by newer browsers
//a.remove();