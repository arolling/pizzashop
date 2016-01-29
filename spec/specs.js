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
    testPizza.setSize('Small');
    expect(testPizza.pieSize).to.equal('Small');
    expect(testPizza.total).to.equal(599);
    console.log(testPizza);
  });
});
