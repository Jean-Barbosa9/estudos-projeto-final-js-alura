function createSprite(jqSelector) {
  return sprite = {
    selectedElement: $(jqSelector),
    frameDigit: 1,

    nextFrame: function(){
      const { selectedElement } = sprite
      regex = /frame(\d)/,
      classList = selectedElement.attr('class').split(/\s+/)

      $(classList).each(function(){
        if(regex.test(this)) {
          sprite.frameDigit = parseInt(this.match(/frame(\d)/)[1])
        }
      })
      sprite.frameDigit < 9 ? selectedElement.removeClass(String('frame' + sprite.frameDigit)).addClass('frame' + ++sprite.frameDigit) : ''
    },

    reset: function() {
      var classList = sprite.selectedElement.attr('class').split('/\s+/')
      var regex = /frame\d/
      $(classList).each(function(){
        var thisClass = this.match(regex)[0]
        if(regex.test(this)) sprite.selectedElement.removeClass(thisClass)
      })
    },

    isFinished: function() {
      return sprite.frameDigit == 9
    }
  }
}
