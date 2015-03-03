var Weather = function() {};

  Weather.prototype.isStormy = function() {
    var random = Math.floor((Math.random() * 100) + 1);
    if(random < 50) {
      return true;
    } else {
      return false;
    };
  };