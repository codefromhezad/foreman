Foreman
=======

### Quick-start

1. Import foreman script from front
```html
    <script src="foreman.js"></script>
```
   or from the worker
```javascript
    importScripts('foreman.js')
```
   
2. There is now a object called "foreman" available. Use it to set worker file
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
5. Send data to the worker
```javascript
foreman.send('an_action', "action data");
```

### Example

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
