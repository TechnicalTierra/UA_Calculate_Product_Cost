// fridge: store vegetables
var productOne = document.getElementById("inputOne");
var productTwo = document.getElementById("inputTwo");
var cartTotalDisplay = document.getElementById("cartTotalDisplay");
var cartTotalButton = document.getElementById("cartTotalButton");


// appliance functions 
function addCartTotal(){
  // console.log('add total button clicked');
  // console.log(parseInt(productOne.value) + parseInt(productTwo.value));
  var cartTotalEl = parseInt(productOne.value) + parseInt(productTwo.value);
  // console.log(cartTotalEl);
  cartTotalDisplay.value = cartTotalEl;
  // cartTotalDisplay.value = "Your cart has been updated. goofy goof";
  // productOne.value = "";
  // productTwo.value = "";
}
