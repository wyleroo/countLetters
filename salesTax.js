// INPUTS
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//Get some function
function getSum(total, num) {
  return total + num;
}


//Calculate sales tax
function calculateSalesTax(salesData, taxRates) {
  var printMe = {};
  for (var i = 0; i < companySalesData.length ; i++) {

    var branchSales = companySalesData[i].sales;
    var branchTotal = branchSales.reduce(getSum);
    var branchTax = branchTotal * salesTaxRates[companySalesData[i].province];

    var currentBranch = {
      name: companySalesData[i].name,
      totalSales: branchTotal,
      totalTaxes: branchTax
    }

    var currentName = companySalesData[i].name;
    if (printMe[currentName]) {
      var currentTotal = printMe[currentName.totalSales];
      var currentTax = printMe[currentName.totalTaxes];
      currentTotal + branchTotal;
      currentTax + branchTax;
    } else {
      printMe[currentName] = {totalSales: branchTotal, totalTaxes: branchTax};
    }

    console.log(printMe[currentName]);

  }
  return printMe;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

//Check results
//var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/