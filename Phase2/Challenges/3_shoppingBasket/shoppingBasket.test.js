const ShoppingBasket = require("./shoppingBasket");

describe('shoppingBasket', function() {
  let basket;

//   beforeEach(function() {
  
//   });

  it("gets the price for one mocked candy", function() {
    const candyDouble = { getName: function() { return "Mars"; }, getPrice: function() { return 4.99; } };
    basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it("gets the total price for two mocked candies", function() {
    const skittleDouble = { getName: function() { return "Skittle"; }, getPrice: function() { return 3.99; } };
    const candyDouble = { getName: function() { return "Mars"; }, getPrice: function() { return 4.99; } };
    basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(skittleDouble);
    basket.addItem(skittleDouble);
    expect(basket.getTotalPrice()).toBe(12.97);
  });
});