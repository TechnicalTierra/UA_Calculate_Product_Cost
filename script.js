/***** Project: Calculate the total cost of (3) differently priced products *****/ 

// Step 1: Store the price of each product in a variable: DONE
const productOneCost = 20; // hat
const productTwoCost = 30; // dress
const productThreeCost = 50; // shoes
// Step 2: Store the variable of the quantity input: DONE
// let quantityInputOne = document.getElementById("quantityInputOne").value;
// let quantityInputTwo = document.getElementById("quantityInputTwo").value;
// let quantityInputThree = document.getElementById("quantityInputThird").value;
//--
// const productOneTotalCost = productOneCost * parseInt(quantityInputOne);
// const productTwoTotalCost = productTwoCost * parseInt(quantityInputTwo);
// const productThreeTotalCost = productThirdCost * parseInt(quantityInputThree);
// let cartTotal;

// Step 3: create function to multiply product cost times quantity: DONE
function calculateCost(){
  let quantityInputOne = document.getElementById("quantityInputOne").value;
  const productOneTotalCost = productOneCost * parseInt(quantityInputOne);
  console.log("Your total cost for Product #1 is $" + parseInt(productOneTotalCost));
  document.getElementById("quantityInputOne").value = "";

  let quantityInputTwo = document.getElementById("quantityInputTwo").value;
  const productTwoTotalCost = productTwoCost * parseInt(quantityInputTwo);
  console.log("Your total cost for Product #2 is $" + parseInt(productTwoTotalCost));
  document.getElementById("quantityInputTwo").value = "";

  let quantityInputThree = document.getElementById("quantityInputThree").value;
  const productThreeTotalCost = productThreeCost * parseInt(quantityInputThree);
  console.log("Your total cost for Product #3 is $" + parseInt(productThreeTotalCost));
  document.getElementById("quantityInputThree").value = "";

  console.log( "Your order total is $" + (productOneTotalCost + productTwoTotalCost + productThreeTotalCost) + ".");
}
// 

// Step 4: Make function work on button click: IN PROGRESS
// Step 5: 
// Project: IN PROGRESS
