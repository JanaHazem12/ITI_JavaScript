
// Notes:
// 1- The items string contains item names and their quantities in the format itemName:quantity. You need to calculate the total number of items.
// 2- The deliveryDuration is the number of days between orderDate and deliveryDate.
// 3- The deliveryAddress is always in the format: building number, street name, city, country.
// 4- If the buildingNumber is not a valid number (e.g., Flat 4B), include it as a string.
// 5- The original array should remain unchanged.

function ModifyOrder(orders){
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
            var totalItemss = 0;
            while(k<splitt.length){
                // console.log(splitt[0].length);
                var itemQuantity = splitt[k].charAt(splitt[k].length-1);
                totalItemss += Number(itemQuantity);
                // console.log("fitems = "+ items);
                // formattedOrders[i].items = totalItems;
                formattedOrders[i].totalItems = totalItemss; // add 'totalItems' as a new property
                delete formattedOrders[i].items; // deleting 'items'
                // console.log("IQ: "+itemQuantity);
                // console.log("TI: "+totalItems);
                // formattedOrders.items=renameKey(formattedOrders,'items','totalItems');
                k++;
            }
            i++;
        //                 ITEMS              //          
    }
    // console.log(formattedOrders);
    // console.log(orders);

    //                 DATE              // 
    var datee = 0;
    while (datee<formattedOrders.length){
        var Odate = new Date(formattedOrders[datee].orderDate);
        var Ddate = new Date(formattedOrders[datee].deliveryDate);
        // console.log(Odate);
        // console.log(Ddate);

        // Calculating the time difference of 2 days
        var Difference_In_Time = Ddate.getTime() - Odate.getTime();

        // Calculating the no. of days between 2 dates / no of ms in a day
        var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

        // To display the final no. of days (result)
        // console.log(Difference_In_Days);
        formattedOrders[datee].deliveryDuration=Difference_In_Days;
        datee++;
    }
    //                 DATE              //
    
    var a = 0;
    while (a<formattedOrders.length){ 
        var address  = formattedOrders[a].deliveryAddress;
        // console.log("iteration: "+a);
        var splittAdd = address.split(','); // converted to an array of strings
        var buildingNo = splittAdd[0]; // CHECK BUILDING NUMBER
        var streetNamee = splittAdd[1];
        var cityy = splittAdd[2];
        var countryy = splittAdd[3];
        // console.log("buildingNo = "+ buildingNo);
        // console.log("streetName = "+ streetNamee);
        // console.log("cityy = "+ cityy);
        // console.log("countryy = "+ countryy);
        formattedOrders[a].buildingNumber = buildingNo;
        formattedOrders[a].deliveryStreet = streetNamee;
        formattedOrders[a].deliveryCity = cityy;
        formattedOrders[a].deliveryCountry = countryy;
        delete formattedOrders[a].deliveryAddress;
        a++;
    }

    let newArr = [];
    for(let user in formattedOrders){
    // newArr.push(user); //Here I am also adding the first level keys (Alan, Jeff, Sarah and Ryan with each iteration.
    if(newArr[0] == 'items'){
        console.log("hhh");
        newArr[0] = 'totalITEMS';
    }
    newArr.push((Object.keys(formattedOrders[user]))); //Here I am adding the keys of Alan, Jeff, Sarah and Ryan with each iteration
    }
    console.log(formattedOrders);
    // console.log(orders);
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

// function copy(orders){
//     return orders.slice();
// }

function ordersCopy(orders){
    var FormattedOrders = JSON.parse(JSON.stringify(orders));
    return FormattedOrders;
}
ModifyOrder(ordersCopy(orders));
console.log(orders);