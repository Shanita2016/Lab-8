var groceryitem1 =
{
  name: "almond milk",
  price: 2.49
};

var groceryitem2 =
{
  name: "apples",
  price: 1.99
};

var groceryitem3 =
{
  name: "crackers",
  price: 1.50
};

var groceryitem4 =
{
  name: "beer",
  price: 10.99
};

var groceryitem5 =
{
  name: "ground beef",
  price: 4.79
};

var shoppingList = [groceryitem1, groceryitem2, groceryitem3, groceryitem4, groceryitem5];
var total = 0;

shoppingList.forEach(function(item){
  var groceryList = document.createElement('li');
  groceryList.innerHTML = '<p>'+ item.name + ': $'+item.price.toFixed(2)+'</p>';
  document.body.appendChild(groceryList);
  total += item.price;
});

var groceryTotal = document.createElement('li');
groceryTotal.innerHTML = '<p> Your total is: $' + total.toFixed(2);
document.body.appendChild(groceryTotal);
