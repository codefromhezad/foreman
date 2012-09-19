importScripts('../lib/foreman.js');

var foreman = new Foreman();

setInterval( function() {
    foreman.send('result', Math.random());
}, 1000 );

foreman.start();
