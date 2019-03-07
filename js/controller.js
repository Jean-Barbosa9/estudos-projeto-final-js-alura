var createController = function(game) {

  var $input = $('#entrada'), $gaps = $('.lacunas');

  var showGaps = function () {
    game.printGaps()
  };

  var changePlaceHolder = function(text) {
    $input.attr('placeholder',text)
  };

  var saveSecret = function(word) {
    game.setSecret(word)
    showGaps()
    changePlaceHolder()
  };

  // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
  var init = function () {

    $('form').submit(function(event) {
      event.preventDefault()
      switch (game.getEtapa()) {
        case 1:
          saveSecret($input.text())
          alert('etapa 1 - falta implementar');
          break;
        case 2:
          alert('etapa 2 - falta implementar');
          break;
      }
    });
  };

  return {init: init}
};
