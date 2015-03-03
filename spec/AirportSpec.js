describe("Airport", function() {

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj("plane", ['land','takeOff']);
  });

  function fillAirport() {
    for (i = 0; i < 10; i++) {
      airport.land(plane);
    };
  };

  it("can land a plane", function() {
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it("can dock a plane", function() {
    airport.land(plane);
    expect(airport.planes.length).toEqual(1);
  });

  it("can allow a plane to take off", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });

  it("knows a plane has taken off", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes.length).toEqual(0);
  });

});

