// Callback
/* 
let wallet = 2000;

const products = [
  { name: "Phone", price: 1200 },
  { name: "Charger", price: 300 },
  { name: "Earphones", price: 500 },
  { name: "Back Cover", price: 200 },
  { name: "Cable", price: 100 }
];

function showProducts(callback) {
  console.log("Available Products:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + " - ₹" + products[i].price);
  }
  callback();
}

function createOrder(callback) {
  console.log("");
  console.log("Creating order...");
  const selectedIndexes = [0, 2, 4];  
  const order = [];
  for (let i = 0; i < selectedIndexes.length; i++) {
    order.push(products[selectedIndexes[i]]);
  }
  console.log("Order created.");
  console.log("");
  callback(order);
}

function makePayment(order, callback) {
  let total = 0;
  for (let i = 0; i < order.length; i++) {
    total += order[i].price;
  }
  console.log("Total to Pay: ₹" + total);

  if (wallet >= total) {
    console.log("Payment successful.");
    console.log("");
    callback(order, total);
  } else {
    console.log("Not enough balance.");
    console.log("");
  }
}

function showSummary(order, total, callback) {
  console.log("Order Summary:");
  for (let i = 0; i < order.length; i++) {
    console.log(order[i].name + " - ₹" + order[i].price);
  }
  console.log("");
  console.log("Total: ₹" + total);
  console.log("");
  callback(total);
}

function updateWallet(total) {
  wallet = wallet - total;
  console.log("Wallet updated. Remaining Balance: ₹" + wallet);
}
showProducts(function() {
  createOrder(function(order) {
    makePayment(order, function(order, total) {
      showSummary(order, total, function(total) {
        updateWallet(total);
      });
    });
  });
});
 */

////// By Promises


let wallet = 2000;

const products = [
  { name: "Phone", price: 1200 },
  { name: "Charger", price: 300 },
  { name: "Earphones", price: 500 },
  { name: "Back Cover", price: 200 },
  { name: "Cable", price: 100 }
];

function showProducts() {
  return new Promise(function(resolve) {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].name + " - ₹" + products[i].price);
    }
    console.log("");
    resolve();
  });
}

function createOrder() {
  return new Promise(function(resolve) {
    console.log("Creating order...");
    const selectedIndexes = [0, 2, 4]; 
    const order = [];
    for (let i = 0; i < selectedIndexes.length; i++) {
      order.push(products[selectedIndexes[i]]);
    }
    console.log("Order created.");
    console.log("");
    resolve(order);
  });
}

function makePayment(order) {
  return new Promise(function(resolve, reject) {
    let total = 0;
    for (let i = 0; i < order.length; i++) {
      total += order[i].price;
    }
    console.log("Total to Pay: ₹" + total);

    if (wallet >= total) {
      console.log("Payment successful.");
      console.log("");
      resolve({ order: order, total: total });
    } else {
      console.log("Payment failed: Not enough balance.");
      console.log("");
      reject("Payment Error");
    }
  });
}

function showSummary(order, total) {
  return new Promise(function(resolve) {
    console.log("Order Summary:");
    for (let i = 0; i < order.length; i++) {
      console.log(order[i].name + " - ₹" + order[i].price);
    }
    console.log("");
    console.log("Total: ₹" + total);
    console.log("");
    resolve(total);
  });
}

function updateWallet(total) {
  wallet = wallet - total;
  console.log("Wallet updated. Remaining Balance: ₹" + wallet);
}

showProducts()
  .then(function() {
    return createOrder();
  })
  .then(function(order) {
    return makePayment(order);
  })
  .then(function(result) {
    return showSummary(result.order, result.total);
  })
  .then(function(total) {
    updateWallet(total);
  })
  .catch(function(error) {
    console.log("Process ended with error:", error);
  });
