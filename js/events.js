'use strict';

window.onload = function() {
    console.log('Window loaded!');
};

var btn = document.querySelector('button');

btn.onclick = function() {
    console.log('Clicked!');
}

// disadvantage here is that there is only one handler
// doesn't support multiple listeners
btn.onclick = function() {
    console.log('Also clicked!');
}

document.onclick = function() {
    console.log('document clicked!');
}


function listener1() {
    console.log('listener 1');
}

function listener2() {
    console.log('listener 2');
}

// here we can add multiple listeners for events
// the event name is without the "on" prefix
btn.addEventListener('click', listener1);
btn.addEventListener('click', listener2, true);

setTimeout(function() {
    console.log('removing second click event listener');
    btn.removeEventListener('click', listener2);
}, 10000);


var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');

inner.addEventListener('click', innerListener);

// what if you want to change the event propogation order
// start from the outer element first, set the second param to true
outer.addEventListener('click', outerListener, true);

function innerListener(event) {
    console.log(event.bubbles); // does the event bubble up?
    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
    event.target.style.backgroundColor = 'red';
    event.stopPropagation(); // the outer listener, or the document click listener won't handle it
    console.log('clicked inner!');
}

function outerListener(event) {
    console.log('clicked outer!');
}

