var memory = require('./memory');


var observer = function () {
   
    var notify = function () {
        console.log('ALERT');
    }
    
    return {
        notify: notify
    }
}

var ob1 = observer();
var ob2 = observer();

memory.registerObserver(ob1);
memory.registerObserver(ob2);
memory.run();
