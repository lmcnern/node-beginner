//passing function test
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, 'hello from first test!');
//end passing function test

function executeTwo(someFunctionTwo, valueTwo) {
  someFunctionTwo(valueTwo);
}

execute(function(word){ console.log(word) }, 'hello from second test!');
