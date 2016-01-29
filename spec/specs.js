describe ('Pizza', function (){
  it('will create a baseline Pizza object from an inputted pizza type', function(){
    var testPizza = new Pizza("Pepperoni", [599, 799, 999]);
    expect(testPizza.kind).to.equal('Pepperoni');
    expect(testPizza.extras).to.eql([]);
    expect(testPizza.basePrices).to.eql([599, 799, 999]);
    expect(testPizza.total).to.eql(0);
  });
});
