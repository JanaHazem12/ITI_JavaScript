
// Notes:
// 1- The items string contains item names and their quantities in the format itemName:quantity. You need to calculate the total number of items.
// 2- The deliveryDuration is the number of days between orderDate and deliveryDate.
// 3- The deliveryAddress is always in the format: building number, street name, city, country.
// 4- If the buildingNumber is not a valid number (e.g., Flat 4B), include it as a string.
// 5- The original array should remain unchanged.

function ModifyItems(orders){
    var formattedOrders = orders;
    //                 ITEMS              // 
    // 1. access items in each order object - DONE
    // 2. split what's inside items using , delimiter - DONE // to convert the string ot an array of items
    // 3. loop over items to get the quantities - DONE
    // 4. summation of quantites - DONE
    // 5. change 'items' to 'totalItems'
    //                 ITEMS              // 
    var i = 0;
    while(i<formattedOrders.length){
            var items  = formattedOrders[i].items;
            var splitt = items.split(','); // converted to an array of strings
            // console.log(splitt);
            var k = 0;
            var totalItems = 0;
            while(k<splitt.length){
                // console.log(splitt[0].length);
                var itemQuantity = splitt[k].charAt(splitt[k].length-1);
                totalItems += Number(itemQuantity);
                console.log("fitems = "+ items);
                formattedOrders[i].items = totalItems;
                // console.log("IQ: "+itemQuantity);
                // console.log("TI: "+totalItems);
                // formattedOrders.items=renameKey(formattedOrders,'items','totalItems');
                k++;
            }
            i++;
            var j=0;
            while(j<formattedOrders.length){ // works with eveything except 'items'
                delete formattedOrders[j].customer;
                j++;
            }
        //                 ITEMS              //          
    }
    console.log(formattedOrders);
    console.log(orders);
    // 1
    // delete (formattedOrders[items]);
    // var formattedOrders2 = Object.keys(orders)
    // .filter(key => key != "customer")
    // .reduce((acc, key) => {
    //     acc[key] = orders[key];
    //     return acc;
    // }, {}); 

    // 2
    // function removeKey(obj, keyToRemove) {
    //     return Object.keys(obj).reduce((acc, key) => {
    //         if (key !== keyToRemove) {
    //             acc[key] = obj[key];
    //         }
    //         return acc;
    //     }, {});
    // }
    // const keyToRemove = 'deliveryAddress:';
    // const newObject = removeKey(formattedOrders, keyToRemove);
    // console.log(newObject);

    //                 DATE              // 
    var datee = 0;
    while (datee<formattedOrders.length){
        var Odate = new Date(formattedOrders[datee].orderDate);
        var Ddate = new Date(formattedOrders[datee].deliveryDate);
        // console.log(Odate);
        // console.log(Ddate);

        // Calculating the time difference of 2 days
        var Difference_In_Time = Ddate.getTime() - Odate.getTime();

        // Calculating the no. of days between 2 days // no of ms in a day
        var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

        // To display the final no. of days (result)
        console.log(Difference_In_Days);
        datee++;
    }
    //                 DATE              //
    
    var a = 0;
    while (a<formattedOrders.length){ 
        var address  = formattedOrders[a].deliveryAddress;
        console.log("iteration: "+a);
        var splittAdd = address.split(','); // converted to an array of strings
        var buildingNo = splittAdd[0]; // CHECK BUILDING NUMBER
        var streetNamee = splittAdd[1];
        var cityy = splittAdd[2];
        var countryy = splittAdd[3];
        console.log("buildingNo = "+ buildingNo);
        console.log("streetName = "+ streetNamee);
        console.log("cityy = "+ cityy);
        console.log("countryy = "+ countryy);
        a++;
    }
    // deleted deliveryAddress
    // add buildingNumber, streetName, city, Country
    var delAdd=0;
    while(delAdd<formattedOrders.length){
        delete formattedOrders[delAdd].deliveryAddress;
        delAdd++;
    }
    console.log(formattedOrders);

    formattedOrders.forEach((add) => { // puts the SAME value in ALL of them
        add.buildingNumber = buildingNo;
        add.streetName = streetNamee;
        add.city = cityy;
        add.country = countryy;
      });
    
    console.log(formattedOrders);
}
  
  
var orders = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      //  totalItems: 8 - INSTEAD OF items
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
];
console.log(ModifyItems(orders));

// function renameKey(formattedOrders, fromKey, toKey) {
//     result = Object.assign({}, formattedOrders); // clone so we don't modify the original.
//     delete result[fromKey];
//     result[toKey] = formattedOrders[fromKey];
//     // console.log(result[toKey]);
//     return result;
//   }
// console.log(renameKey(orders,'items','totalItems'))

var date1 = new Date('2023-07-15');
var date2 = new Date('2023-07-10');

// function days_between(date1, date2) {
//     // number of milliseconds in one day
//     const ONE_DAY = 1000 * 60 * 60 * 24;

//     // difference in milliseconds bt. both dates
//     const differenceMs = Math.abs(date1 - date2);

//     // Convert back to days and return --> difference in ms / ms in 1 day
//     return Math.round(differenceMs / ONE_DAY);
// }

// console.log(days_between(date1, date2));