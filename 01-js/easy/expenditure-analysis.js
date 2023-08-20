/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var object = {};
  for (let i = 0; i < transactions.length; i++) {
    var t = transactions[i];
    if (object[t.category]) {
      object[t.category] += t.price;
    } else {
      object[t.category] = t.price;
    }
  }
  var keys = Object.keys(object);

  // keys = ['drink', 'food']

  let ans = [];
  for (let i = 0; i < keys.length; i++) {
    var obj = {
      category: keys[i],
      totalSpent: object[keys[i]],
    };
    ans.push(obj);
  }
  return ans
}

var transactions = [
  {
    itemName: "coca-cola",
    category: "drinks",
    price: 25,
    timestamp: 123123,
  },
  {
    itemName: "pepsi",
    category: "drinks",
    price: 20,
    timestamp: 123123,
  },
  {
    itemName: "briyani",
    category: "rice",
    price: 100,
    timestamp: 123123,
  },
];

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
