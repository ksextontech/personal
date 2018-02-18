
'use strict';

var httpGetRequest = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'GET';

httpGetRequest.open(method, url);
httpGetRequest.send();

httpGetRequest.onreadystatechange = function() {
    if (httpGetRequest.readyState == XMLHttpRequest.DONE && httpGetRequest.status == 200) {
        var json = JSON.parse(httpGetRequest.responseText)
        console.log(json);
        console.log(json[1]);
    } else if (httpGetRequest.readyState == XMLHttpRequest.DONE && httpGetRequest.status != 200) {
        console.log('error');
    }
}

var httpPostRequest = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'POST';
var data = 'title=Post%20Title&body=Body';

httpPostRequest.open(method, url);
httpPostRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
httpPostRequest.send(data);

httpPostRequest.onreadystatechange = function() {
    if (httpPostRequest.readyState == XMLHttpRequest.DONE && httpPostRequest.status == 201) {
        var json = JSON.parse(httpPostRequest.responseText)
        console.log(json);
    } else if (httpPostRequest.readyState == XMLHttpRequest.DONE && httpPostRequest.status != 201) {
        console.log('error');
    }
}