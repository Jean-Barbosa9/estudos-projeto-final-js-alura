var criaJogo = function() {
  var palavraSecreta = '';
  var lacunas = [];
  var etapa = 1

  var setPalavraSecreta = function(palavra) {
    palavraSecreta = palavra
    etapa++
    return palavraSecreta
  };

  var getEtapa = function() {
    return etapa
  };

  var getLacunas = function() {
    return lacunas = palavraSecreta.split(/\w/).slice(0,palavraSecreta.length)
  };



  return {
    setPalavraSecreta: setPalavraSecreta,
    getEtapa: getEtapa,
    getLacunas: getLacunas
  };
};
