//// By Callback



let wallet = 2000;

const products = [
  { name: "Phone", price: 1200 },
  { name: "Charger", price: 300 },
  { name: "Earphones", price: 500 },
  { name: "Back Cover", price: 200 },
  { name: "Cable", price: 100 }
];

function showProducts(callback) {
  console.log("📦 Available Products:\n");
  const productLines = products.map(p => `${p.name} - ₹${p.price}`);
  console.log(productLines.join("\n"));
  callback();
}

function createOrder(callback) {
  console.log("\n🛒 Creating order...");
  const selectedIndexes = [0, 2, 4];
  const order = selectedIndexes.map(index => products[index]);
  console.log("✔️ Order created!\n");
  callback(order);
}

function makePayment(order, callback) {
  const total = order.reduce((sum, item) => sum + item.price, 0);
  console.log(`💳 Total to Pay: ₹${total}`);
  if (wallet >= total) {
    console.log("✅ Payment successful!\n");
    callback(order, total);
  } else {
    console.log("❌ Payment failed: Not enough balance.\n");
  }
}

function showSummary(order, total, callback) {
  console.log("📄 Order Summary:\n");
  const summaryLines = order.map(item => `${item.name} - ₹${item.price}`);
  console.log(summaryLines.join("\n"));
  console.log(`\nTotal: ₹${total}\n`);
  callback(total);
}

function updateWallet(total) {
  wallet -= total;
  console.log(`💰 Wallet updated. Remaining Balance: ₹${wallet}`);
}

showProducts(() => {
  createOrder(order => {
    makePayment(order, (order, total) => {
      showSummary(order, total, total => {
        updateWallet(total);
      });
    });
  });
});
