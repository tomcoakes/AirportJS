var Plane = function() {
  this.flying = true;
};

Plane.prototype.land = function() {
  this.flying = false;
};

Plane.prototype.takeOff = function() {
  this.flying = true;
};