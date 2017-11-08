

  var observerCollection = [];
  
      var registerObserver = function (observer) {
          var observer = observer;
          observerCollection.push(observer);
      }
  
      var notifyObservers = function () {
          for (var i = 0; i < observerCollection.length; i++) {
              var observer = observerCollection[i];
              observer.notify();
              
          }
      }
  
      var run = function () {
          setInterval(function (){
              var os = require('os');
              var memory = os.freemem() / 1000000;
              if (memory < 1600) {
                notifyObservers();
            }
              console.log(memory);

            
          },1000);
  
       
      }
  
   

module.exports.run = run;
module.exports.registerObserver = registerObserver;
 

