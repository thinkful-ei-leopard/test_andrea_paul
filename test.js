let globalVariable = 'I am a global variable';

const fn = function() {
  let localVariable = 'I am a local variable';
  console.log(globalVariable);
};

console.log(localVariable);