describe ('Pizza', function (){
  it('will create a baseline Pizza object from an inputted pizza type', function(){
    var testPizza = new Pizza("Pepperoni", [599, 799, 999]);
    expect(testPizza.kind).to.equal('Pepperoni');
    expect(testPizza.extras).to.eql([]);
    expect(testPizza.basePrices).to.eql([599, 799, 999]);
    expect(testPizza.total).to.eql(0);
    console.log(testPizza);
  });

  it('will select the size of the pizza and add the price to the total cost', function() {
    var testPizza = new Pizza("Pepperoni", [599, 799, 999]);
    testPizza.setSize('Medium');
    expect(testPizza.pieSize).to.equal('Medium');
    expect(testPizza.total).to.equal(799);
    console.log(testPizza);
  });

  it('will add a topping or modification and its price to the total cost', function() {
    var testPizza = new Pizza("Pepperoni", [599, 799, 999]);
    testPizza.setSize('Medium');
    testPizza.addExtra('Extra Cheese', 75);
    testPizza.addExtra('Gluten Free', 450);
    expect(testPizza.extras).to.eql(['Extra Cheese', 'Gluten Free']);
    expect(testPizza.total).to.equal(1324);
    console.log(testPizza);
  });

  it('will return a friendly description of the current state of the pizza', function() {
    var testPizza = new Pizza("Pepperoni", [599, 799, 999]);
    testPizza.setSize('Medium');
    testPizza.addExtra('Extra Cheese', 75);
    testPizza.addExtra('Gluten Free', 450);
    expect(testPizza.describePizza()).to.equal('Medium Pepperoni Pizza with Extra Cheese and Gluten Free');
  });

  it('will return a friendly description of the current pizza cost', function() {
    var testPizza = new Pizza("Pepperoni", [599, 799, 999]);
    testPizza.setSize('Medium');
    testPizza.addExtra('Extra Cheese', 75);
    testPizza.addExtra('Gluten Free', 450);
    expect(testPizza.currentCost()).to.equal('$13.24');
  });
});

describe('Order', function() {
  it('will create an object to contain an entire customer order', function(){
    var testOrder = new Order('test order');
    expect(testOrder.name).to.equal('test order');
    expect(testOrder.pizzas).to.eql([]);
    expect(testOrder.grandTotal).to.eql(0);
  });
});
