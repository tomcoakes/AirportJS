var Airport = function(capacity) {
  this.capacity = typeof capacity !== 'undefined' ? capacity : 10;
  this.planes = [];
  this.full = false;
};

  Airport.prototype.land = function(plane, weather) {
    if (this.full === true) {
      throw new Error("Airport is full");
    } else if (weather.isStormy() === true) {
      throw new Error("There's a storm");
    } else {
      plane.land();
      this._dock(plane);
      this._checkWhetherFull();
      }
    };

  Airport.prototype.takeOff = function(plane, weather) {
    plane.takeOff();
    var planeIndex = this.planes.indexOf(plane);
    this.planes.splice(planeIndex, 1);
  };


// Private methods
  Airport.prototype._dock = function(plane) {
    this.planes.push(plane);
  };

  Airport.prototype._checkWhetherFull = function() {
    if (this.planes.length >= this.capacity) {
      this.full = true;
    } else {
      this.full = false;
    }
  };
