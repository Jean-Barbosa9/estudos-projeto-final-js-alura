// Entendo que essa seria uma forma de começar a resolver o problema, mas no briefing ele exige que createSprite seja uma função. Aqui eu teria que inicializar a classe como createSprite, para que ele possa chamar no index da forma como ele colocou, mas não é a sintaxe mais correta
class Sprite {
  constructor(jqSelector) {
    this.createSprite(jqSelector)
  }

  createSprite(jqSelector) {
    return $(jqSelector)
  }

  nextFrame() {

  }
}

const createSprite = new Sprite()

// Outra forma de fazer seria criando uma função que retorna um objeto, mas tô em dúvida de como isso poderia retornar tanto o objeto com o método nextFrame quanto a seleção do elemento HTML, passando pelo parâmetro
function createSprite(jqSelector) {
  return sprite = {
    nextFrame: function(){

    }
  }
}
