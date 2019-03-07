var game = function(sprite) {
  var secret = '', gap = [], step = 1, hits = 0;
  var inputs = []; //TODO: Colocar uma validação para verificar se o usuário já chutou essa opção antes, para não correr o risco de ser punido por estar chutando a mesma opção novamente.

  var printGap = function() {
    $(gap).each(function(){
      $('ul.lacunas').append('<li class="lacuna"></li>')
    });
  };

  var setGap = function() {
    gap = Array(secret.length).fill('')
    printGap()
  };

  var setStep = function(n) {
    step = n
  }

  var setSecret = function(word) {
    secret = word.toUpperCase()
    setGap()
    setStep(2)
  };

  var getGap = function() {
    return gap
  };

  var getStep = function() {
    return step
  };

  var correctInput = function(input,index) {
    $('ul.lacunas li:eq('+index+')').text(input)
    hits++
  };

  var wrongInput = function() {
    sprite.nextFrame()
  };

  var won = function() {
    return hits == secret.length
  };

  var lost = function() {
    return sprite.isFinished()
  };

  var wonOrLost = function() {
    return won() || lost()
  };

  var reStart = function() {
    setStep(1);
    gap = [];
    secret = '';
    hits = 0;
    $('ul.lacunas').html('');
    sprite.reset();
  };

  var message = function() {
    if(won()) {
      setTimeout(function(){
        alert('Parabéns, você completou o jogo com sucesso!');
        reStart()
      },500)

    }
    if(lost()) {
      setTimeout(function(){
        alert('Infelizmente não foi desta vez, mas te desejo mais sorte na próxima tentativa! A palavra era '+secret);
        reStart()
      },500)
    };
  };

  var processInput = function(guessWhat) {
    var input = guessWhat.toUpperCase(), errors = 0;

    for(var i=0, len=secret.length;i<len;i++) {
      if(secret[i] == input) {
        gap[i] = input;
        correctInput(input,i)
      }
      else {
        errors++;
      }
    };

    if(errors == secret.length) {
      wrongInput()
    }

    message()
  };

  return {
    setSecret: setSecret,
    getStep: getStep,
    getGap: getGap,
    processInput: processInput
  };
};
