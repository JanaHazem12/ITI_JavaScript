// a function that accepts a price and a discount as numbers
// & returns the discounted price
// DISCOUNT --> FROM 0 TO 100
// return price after discount
// test cases:
// 1.  discount is <0 OR >100
// 2.  price is <0
// 3. price or discount are input as strings ??

function DiscountedPrice(price, discount){
    if(typeof(price)==='number'){   // TO MAKE SURE THAT PRICE IS A NUMBER
        if(!(price<=0)){ // price > 0
            if(typeof(discount)==='number'){  // TO MAKE SURE THAT DISCOUNT IS A NUMBER
                if(discount > 0 && discount <= 100){ 
                    price = price*(100-discount)/100;
                    // return parseFloat(price.toFixed(2)); // 2 dp ONLY if float
                    // return Math.ceil(price); // ceiling to avoid DPs
                    return price;
                }
                else{
                    console.log("discount is in NEGATIVE !");
                }
            }
            else{
                console.log("discount is NOT a number !");
            }
        }
        else{
            console.log("price is in NEGATIVE !");
        }
        
    }
    else{
        console.log("price is NOT a number !");
    }
}
// var price = "2364";
// var discount = 80;
// var price = 2364;
// var discount = "80";
var price = 6532;
var discount = 20;
console.log(DiscountedPrice(price, discount))