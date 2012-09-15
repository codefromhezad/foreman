Foreman
=======

### Quick-start

See example1.html and example1.worker.js :

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
