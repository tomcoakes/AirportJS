# AirportJS

### Synopsis

I created this repo in order to practice creating a simple domain model in JavaScript, whilst testing the objects using Jasmine. I'd previously created a similar program in Ruby that [can be found here](https://github.com/tomcoakes/airport-challenge).

### Technologies Used

- JavaScript
- Jasmine

### Favourite Code Snippet

```javascript
describe("in sunny weather", function() {

  beforeEach(function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
  });
```

Upon refactoring the AirportSpec.js file, I was able to begin nesting describe blocks in a semantic way that mocked out the randomness of the weather as appropriate.

### Further Refactoring Opportunities

I'm not satisfied with the way that I used Chicago Style of TDD, by creating an instance of the weather object rather than a using a spy object. This is because I've had difficulty forcing a return value on a spy object that has already been created and get the message (this method has already been spied upon).

### Takeaway

- Having previously completed the same task using Ruby and RSpec, the actual modelling of the domain came easily to me so I was instead able to focus on learning the JavaScript syntax.
- It was an interesting opportunity to see how similar test-driven code can be to produce in different languages.
- It taught me the difference between Ruby as a classical language vs. JavaScript as a prototypical one.
