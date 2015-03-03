describe("Plane", function() {

  var plane = new Plane();

  it("is flying upon creation", function() {
    expect(plane.flying).toBe(true);
  });

  it("can land", function() {
    plane.land();
    expect(plane.flying).toBe(false);
  });

  it("can takeoff", function() {
    plane.land();
    plane.takeOff();
    expect(plane.flying).toBe(true);
  });


});