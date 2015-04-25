var Weather = function() {};

  Weather.prototype.isStormy = function() {
    var random = Math.floor((Math.random() * 100) + 1);
    return (random < 50 ? true : false)
  };