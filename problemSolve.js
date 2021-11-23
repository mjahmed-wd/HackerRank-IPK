// let data = [
//   { name: "Rahim", cost: 200, id: 1 },
//   { name: "karim", cost: 100, id: 2 },
//   { name: "J.C", cost: 100, id: 3 },
//   { name: "Jamal", cost: 100, id: 4 },
// ];

// let optData = [
//   {
//     id: 1,
//     phone: "01681876441",
//     address: "Dhaka",
//   },
//   {
//     id: 1,
//     phone: "01681876444",
//     address: "Sirajgong",
//   },
//   {
//     id: 1,
//     phone: "01681876445",
//     address: "Dhakas",
//   },
//   {
//     id: 2,
//     phone: "01781876445",
//     address: "Naraingonj",
//   },

//   {
//     id: 3,
//     phone: "01581876445",
//     address: "Bogura",
//   },
// ];

// data.forEach((element, index) => {
//   const rowData = optData.filter((item) => item.id === element.id);
//   element.dataList = rowData;
// });
// console.log(data);

// const data = [
//   { id: 1, item: "Apple", quantity: 2, price: 100 },
//   { id: 2, item: "Pineapple", quantity: 20, price: 90 },
//   { id: 2, item: "Banana", quantity: 12, price: 20 },
//   { id: 1, item: "Guava", quantity: 22, price: 40 },
//   { id: 5, item: "Mango", quantity: 10, price: 400 },
// ];
// const newData = []
// data.forEach((element, index) => {
//   const existingData =newData.findIndex(item => item.id === element.id)
//   if (existingData>-1) {
//     newData[existingData].dataList.push(element)
//   } else {
//     newData.push({id: element.id, dataList: [element]})
//   }
// });

// console.log(newData);

let data = [
  { id: 1, item: "Apple", quantity: 2, price: 100 },
  { id: 2, item: "Painapple", quantity: 20, price: 90 },
  { id: 2, item: "Banana", quantity: 12, price: 20 },
  { id: 1, item: "Guava", quantity: 22, price: 40 },
  { id: 3, item: "Mango", quantity: 10, price: 400 },
];

let newData = [];

data.forEach((col, colIndex) => {
  const foundObj = newData?.find((item) => item.id == col.id);
  if (foundObj) {
    foundObj.items.push({
      item: col.item,
      quantity: col.quantity,
      price: col.price,
    });
  } else {
    newData.push({
      id: col.id,
      items: [
        {
          item: col.item,
          quantity: col.quantity,
          price: col.price,
        },
      ],
    });
  }
});