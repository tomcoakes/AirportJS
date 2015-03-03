describe("Plane", function() {

  var plane = new Plane();

  it("is flying apon creation", function() {
    expect(plane.flying).toBe(true);
  });


});