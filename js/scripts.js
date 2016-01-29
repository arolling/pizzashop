function Pizza(kind, basePrices){
  this.kind = kind;
  this.pieSize = '';
  this.basePrices = basePrices; // an array of the small, medium, large prices for this topping
  this.extras = []; // names extra toppings, modifications (ie gluten free)
  this.total = 0; // as extras are added, their cost adds to total
}

Pizza.prototype.setSize = function(size){
  this.pieSize = size;
  this.total = 0;
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

Pizza.prototype.describePizza = function(){
  var extraString = '';
  var and = 'with '; // little crazy, but...
  this.extras.forEach(function(extra) {
    extraString += and;
    extraString += extra;
    and = ' and ';
  });
  return this.pieSize + ' ' + this.kind + ' Pizza ' + extraString;
}

Pizza.prototype.currentCost = function() {
  return '$' + (this.total / 100).toFixed(2);
}

function Order(customer){
  this.name = customer;
  this.pizzas = [];
  this.grandTotal = 0;
}  // Object to contain multiple pizzas

Order.prototype.totalUp = function() {
  var subTotal = 0; // resets total in case customer has previously summed
  this.pizzas.forEach(function(pizza){
    subTotal += pizza.total;
    console.log(subTotal);
  });
  this.grandTotal = subTotal;
  console.log(this.grandTotal);
}

var taxedTotal = function(rawTotal){ //expects a number, not a whole object
  return ((rawTotal * 1.075) / 100).toFixed(2);
}

$(document).ready(function() {
  var counter = 1;
  var userPizza;
  var userOrder = new Order('Customer'); // name attribute is not actually being used;
  $('form#pizzaPicker').submit(function(event) {
    event.preventDefault();
    var pick = $('select#pizzaType').val();
    userPizza = new Pizza(pick, [500, 1000, 1500]);
    console.log(userPizza);
    var size = $('select#pizzaSize').val();
    userPizza.setSize(size);
    console.log(userPizza);
    userOrder.pizzas.push(userPizza);
    userOrder.totalUp();
    $('#pizzaList' + counter).html('<li class="list-group-item">' + userPizza.describePizza() + '</li>');
    $('#priceList' + counter).html('<li class="list-group-item">' + userPizza.currentCost() + '</li>');
    $('#totalWithTax').text('$' + taxedTotal(userOrder.grandTotal));
    $('#orderTotal').show();
    $('#extrasPicker').show();
  }); // Choose pizza and size

  $('form#extrasPicker').submit(function(event) {
    event.preventDefault();
    $('input:checkbox:checked').each(function(){
      var extra = $(this).attr('id');
      var extraCost = parseInt($(this).val());
      console.log(extra, extraCost);
      userPizza.addExtra(extra, extraCost);
      console.log(userPizza);
      userOrder.totalUp();
      $('#pizzaList' + counter).html('<li class="list-group-item">' + userPizza.describePizza() + '</li>');
      $('#priceList' + counter).html('<li class="list-group-item">' + userPizza.currentCost() + '</li>');
      $('#totalWithTax').text('$' + taxedTotal(userOrder.grandTotal));
    }); // pulls name and value from each checked item and adds it to Pizza object
    $('input:checkbox').removeAttr('checked'); //unchecks checkboxes
  }); //choose extras

  $('#addPizza').click(function() {
    // Add span to contain next pizza?
    $('#pizzaList' + counter).after('<span id="pizzaList' + (counter+1) + '"></span>');
    $('#priceList' + counter).after('<span id="priceList' + (counter+1) + '"></span>');
    counter++;
    $('#extrasPicker').hide();
  });

  $('#confirmation').click(function(){
    // MUST FIX THIS FOR EACH PIZZA IN ORDER!
    alert('Your total for a ' + userPizza.describePizza() + ' is $' + taxedTotal(userPizza.total));
    window.location.reload();
  });


}); //END DOCUMENT READY FUNCTION
