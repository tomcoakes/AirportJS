describe("Airport", function() {

  var airport = new Airport();
  var plane = jasmine.createSpyObj("plane", ['land','takeOff']);

  afterEach(function) {
    airport.takeOff(plane);
  };

  it("can land a plane", function() {
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("can dock a plane", function() {
    airport.land(plane);
    airport.dock(plane);
    expect(airport.planes.length).toEqual(1);
  });

  it("can allow a plane to take off", function() {
    airport.land(plane);
    airport.dock(plane);
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });

  it("knows a plane has taken off", function() {
    airport.land(plane);
    airport.dock(plane);
    airport.takeOff(plane);
    expect(airport.planes.length).toEqual(0);
  });

});

