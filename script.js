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
  console.log("Your total cost for " + quantityInputOne + " of Product #1 is $" + parseInt(productOneTotalCost) + ".");
  // document.getElementById("quantityInputOne").value = "";

  let quantityInputTwo = document.getElementById("quantityInputTwo").value;
  const productTwoTotalCost = productTwoCost * parseInt(quantityInputTwo);
  console.log("Your total cost for " + quantityInputTwo + " of Product #2 is $" + parseInt(productTwoTotalCost) + ".");
  // document.getElementById("quantityInputTwo").value = "";

  let quantityInputThree = document.getElementById("quantityInputThree").value;
  const productThreeTotalCost = productThreeCost * parseInt(quantityInputThree);
  console.log("Your total cost for " + quantityInputThree + " of Product #3 is $" + parseInt(productThreeTotalCost) + ".");
  // document.getElementById("quantityInputThree").value = "";

  console.log("Your order total is $" + (productOneTotalCost + productTwoTotalCost + productThreeTotalCost) + ".");
  cartTotal = productOneTotalCost + productTwoTotalCost + productThreeTotalCost;
  document.getElementById("cartTotal").innerHTML = "The cart total is $" + cartTotal + "."; 
  
  document.getElementById("quantityInputOne").value = "";
  document.getElementById("quantityInputTwo").value = "";
  document.getElementById("quantityInputThree").value = "";
}
// Step 4: Make function work on button click: DONE

// Step 5: Diplay the total cost to HTML: DONE
// Step 6: Fix CSS: IN PROGRESS >>> testing git branches 
// Project: IN PROGRESS