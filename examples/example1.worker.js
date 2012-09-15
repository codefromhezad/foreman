importScripts('../lib/foreman.js');

setInterval( function() {
    foreman.send('result', Math.random());
}, 1000 );

foreman.start();
