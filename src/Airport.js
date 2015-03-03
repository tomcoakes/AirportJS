var Airport = function() {
  this.planes = [];
};

  Airport.prototype.land = function(plane) {
    plane.land();
  };

  Airport.prototype.dock = function(plane) {
    this.planes.push(plane);
  };

  Airport.prototype.takeOff = function(plane) {
    plane.takeOff();
    var planeIndex = this.planes.indexOf(plane);
    this.planes.splice(planeIndex, 1);
  };
