function receivesAFunction(callback){
    console.log("Chai-");
    callback();
  }
function spy(){
    console.log('spies');
  }
receivesAFunction(spy);

function returnsANamedFunction() {
    const random = function beforeAll(){
        console.log("Heyhoo");
    }
    return random;
}
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function(){
        console.log("")
    }
}