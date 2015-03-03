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

  it("has a capacity", function() {
    var largeAirport = new Airport(20);
    expect(largeAirport.capacity).toEqual(20);
  });

  it("knows when it is not full", function() {
    airport.land(plane);
    expect(airport.full).toBe(false);
  });

  it("knows when it is full", function() {
    var hangar = new Airport(1);
    hangar.land(plane);
    expect(hangar.full).toBe(true);
  });

  it("doesn't allow any more than ten planes to land at a time", function() {
    fillAirport();
    expect(function() {
      airport.land(plane);
    }).toThrow(new Error("Airport is full"));
  });

});

