const [products, stats] = await Promise.all([
  Product.find(),
  ProductStat.find(),
]);

let data = {};
products.forEach((product) => {
  console.log(product._id);
  data[product._id.toString()] = [product];
});

stats.forEach((stat) => {
  console.log(stat);
  if (data[stat.productid]) data[stat.productid].push(stat);
});

let result = [];
for (let idx in data) {
  if (!data[idx][1]) console.log("undefined");
  result.push({
    ...data[idx][0]._doc,
    stat: data[idx][1],
  });
}
