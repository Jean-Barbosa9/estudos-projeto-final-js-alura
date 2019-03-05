var game = function(sprite) {
  var secret = '';
  var gap = [];
  var step = 1;
  var inputs = []; //TODO: Colocar uma validação para verificar se o usuário já chutou essa opção antes, para não correr o risco de ser punido por estar chutando a mesma opção novamente.

  var setSecret = function(word) {
    secret = word
    gap = Array(secret.length).fill('')
    step++
  };

  var correctInput = function() {
    // depois vai printar as letras na tela
    console.log(gap)
  };

  var wrongInput = function() {
    sprite.nextFrame()
  };

  var processInput = function(input) {
    var errors = 0;
    for(var i=0, len=secret.length;i<len;i++) {
      if(secret[i] == input) {
        gap[i] = input;
      }
      else {
        errors++;
      }
    };



    if(errors == secret.length) {
      wrongInput()
    } else {
      correctInput()
    };
  };

  var getGap = function() {
    return gap
  };

  var getStep = function() {
    return step
  };

  return {
    setSecret: setSecret,
    getStep: getStep,
    getGap: getGap,
    processInput: processInput
  };
};
