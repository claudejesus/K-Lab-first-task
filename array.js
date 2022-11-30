// niyigaba claude
var x, y, i, items, tot, newtot;
items = [{ "name": "Bike", "price": 100 },
{ "name": "TV", "price": 200 },
{ "name": "Album", "price": 10 },
{ "name": "Book", "price": 5 },
{ "name": "Phone", "price": 500 },
{ "name": "Computer", "price": 1000 }];


i = 0;
x = 0;

for (var item, _pj_c = 0, _pj_a = items, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  item = _pj_a[_pj_c];

  if (item["price"] < items[x]["price"]) {
    x = i;
  }

  i += 1;
}

console.log(" Cheapest =", items[x]);
i = 0;
y = 0;

for (var item, _pj_c = 0, _pj_a = items, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  item = _pj_a[_pj_c];

  if (item["price"] > items[y]["price"]) {
    x = i;
  }

  i += 1;
}

console.log(" Expensive = ", items[y]);
tot = 0;

for (var item, _pj_c = 0, _pj_a = items, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  item = _pj_a[_pj_c];
  tot = tot + item["price"];
}

console.log(" Total = ", tot);
newtot = 0;

for (var item, _pj_c = 0, _pj_a = items, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  item = _pj_a[_pj_c];

  if (item["price"] >= 10) {
    newtot = newtot + item["price"];
  }
}

console.log(" New total = ", newtot);