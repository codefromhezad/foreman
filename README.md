Foreman
=======

### Quick-start

(Or head straight to the [https://github.com/hezad/foreman#example](example) to see how it works in two seconds)

1. Import front script
```html
<script src="foreman.js"></script>
```
or worker script
```javascript
importScripts('foreman.js')
```
   
2. Set worker file (obviously unavailable in the worker)
```javascript
foreman.use('YOUR_WORKER_FILE.js')
```
3. Set listeners
```javascript
foreman.on( 'info', function(data) {
    alert('data');
})
```
4. Start foreman
```javascript
foreman.start();
```
5. Send data
```javascript
foreman.send('an_action', "action data");
```

### Example

In this example, the worker generates a random number every second and sends it to the frontend with an action "result".
On "result", the front-end logs the number in a div.

#### example1.html:
```html
<div id="log"></div>

<script src="../lib/foreman.js"></script>
<script>
    foreman
        .use('example1.worker.js')
        .on( 'result', function(data) {
            document.getElementById('log').innerHTML += data + '<br />';
        })
        .start();
</script>
```

#### example1.worker.js
```javascript
importScripts('../lib/foreman.js');

setInterval( function() {
    foreman.send('result', Math.random());
}, 1000 );

foreman.start();
```

### Debugging helpers

In the worker, you can use the log(), warn() or error() functions. Data will be
logged in the browser console (because of workers restrictions, you can't log non-
atomic data).
