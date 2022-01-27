const dataset = [
  {
    "offerName": null,
    "customerGroupId": 0,
    "uomId": null,
    "uomName": null,
    "quantity": 3,
    "sdAmount": 0,
    "vatAmount": 0,
    "itemId": 82940,
    "itemName": "Flavour",
    "totalAmount": 600,
    "itemBasePrice": 600,
    "isOfferItem": true
  },
  {
    "offerName": "",
    "customerGroupId": 0,
    "uomId": 3,
    "uomName": "Liter",
    "quantity": 1,
    "sdAmount": null,
    "vatAmount": null,
    "itemId": 82940,
    "itemName": "Flavour",
    "totalAmount": 0,
    "itemBasePrice": 0,
    "isOfferItem": false
  },
  {
    "offerName": "",
    "customerGroupId": 0,
    "uomId": 3,
    "uomName": "Liter",
    "quantity": 1,
    "sdAmount": null,
    "vatAmount": null,
    "itemId": 82930,
    "itemName": "Bottle",
    "totalAmount": 0,
    "itemBasePrice": 0,
    "isOfferItem": false
  },
];


const quantity = (data) => {
  data.forEach((item) => {

  })
}

function findOcc(arr, key) {
  let arr2 = [];

  arr.forEach((x) => {

    // Checking if there is any object in arr2
    // which contains the key value
    if (arr2.some((val) => { return val[key] == x[key] })) {

      // If yes! then increase the occurrence by 1
      arr2.forEach((k) => {
        if (k[key] === x[key]) {

          k["occurrence"]++
          k.quantity += + x.quantity
          k.totalAmount += x.totalAmount
        }
      })

    } else {
      // If not! Then create a new object initialize 
      // it with the present iteration key's value and 
      // set the occurrence to 1
      let a = {}
      a[key] = x[key]
      a["occurrence"] = 1
      a.quantity = x.quantity
      a.uomId = x.uomId
      a.uomName = x.uomName
      a.itemId = x.itemId
      a.itemName = x.itemName
      a.itemBasePrice = x.itemBasePrice
      a.isOfferItem = x.isOfferItem
      a.sdAmount = x.sdAmount
      a.vatAmount = x.vatAmount
      a.offerName = x.offerName
      a.customerGroupId = x.customerGroupId
      a.totalAmount = x.totalAmount
      a.itemBasePrice = x.itemBasePrice
      arr2.push(a);

    }
  })

  return arr2
}


let arr = [
  {
    employeeName: "Ram",
    employeeId: 23
    , quantity: 6
  },
  {
    employeeName: "Shyam",
    employeeId: 24
    , quantity: 2
  },
  {
    employeeName: "Ram",
    employeeId: 21
    , quantity: 2
  },
  {
    employeeName: "Ram",
    employeeId: 25
    , quantity: 2
  },
  {
    employeeName: "Kisan",
    employeeId: 22
    , quantity: 2
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
    quantity: 4
  }
]

let key = "itemId"
console.log(findOcc(dataset, key))
