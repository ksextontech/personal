'use strict';

console.log(window);

console.log(window.innerWidth);
console.log(outerWidth); // since this is in the global scope, we don't have to qualify the window object
console.log(window.innerHeight);
console.log(window.outerHeight);

// local storage is kept throughout many browsers sessions unless manually or programatically deleted
localStorage.setItem('key1', 1000);
console.log(localStorage.getItem('key1'));

// session storage is deleted when the user closes the tab or browser
sessionStorage.setItem('key1', 1000);
console.log(sessionStorage.getItem('key1'));

window.open('http://google.com');