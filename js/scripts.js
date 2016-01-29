function Pizza(kind, basePrices){
  this.kind = kind;
  this.pieSize = '';
  this.basePrices = basePrices; // an array of the small, medium, large prices for this topping
  this.extras = []; // names extra toppings, modifications (ie gluten free)
  this.total = 0; // as extras are added, their cost adds to total
}

Pizza.prototype.setSize = function(size){
  this.pieSize = size;
  if (this.pieSize === "Small"){
    this.total += this.basePrices[0];
  } else if (this.pieSize === "Medium"){
    this.total += this.basePrices[1];
  } else if (this.pieSize === "Large"){
    this.total += this.basePrices[2];
  } else {
    alert("Not a valid size"); // this should NEVER occur, but good for testing
  }
}

Pizza.prototype.addExtra = function(extra, cost){
  this.extras.push(extra);
  this.total += cost;
}
