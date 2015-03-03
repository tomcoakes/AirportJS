var Airport = function() {
  this.planes = [];
};

  Airport.prototype.land = function(plane) {
    plane.land();
    this._dock(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    plane.takeOff();
    var planeIndex = this.planes.indexOf(plane);
    this.planes.splice(planeIndex, 1);
  };

// Private method

  Airport.prototype._dock = function(plane) {
    this.planes.push(plane);
  };