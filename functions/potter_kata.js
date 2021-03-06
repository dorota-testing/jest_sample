/* To try and encourage more sales of the 5 different Harry Potter books they sell, a bookshop has decided to offer discounts of multiple-book purchases. 
One copy of any of the five books costs 8 EUR.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket (containing only Harry Potter books), giving as big a discount as possible.

For example, how much does this basket of books cost?

2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book

[h1, h1, h2, h2, h3, h3, h4, h5] = [h1, h2, h3, h4, h5] + [h1 h2 h3] = 30 + 21.60 = 51.60 EUR

Answer: 51.20 EUR // DOROTA'S NOTE - this was provided, but is not true, in fact answer is 51.60
*/

function basketPrice(arrBooks) {
    if (arrBooks === undefined) throw new Error("arrBooks is required");
    let price = 0;
    if (arrBooks.length === 1) {
        price = 8;
    } else if (arrBooks.length > 1) {
        let arrSequences = splitArrToUnique(arrBooks);
        // array with discount values, index of array equals amount of books
        let arrDiscount = [0, 0, 0.05, 0.1, 0.2, 0.25];
        let discount = 0;
        for (const sequence of arrSequences) {
            if(arrSequences.length < 6){ discount = arrDiscount[sequence.length]; }
            let sequencePrice = (sequence.length * 8) - ((sequence.length * 8) * discount);
            price = price + sequencePrice;
        }
    }
    return price;
}

/**
 * This splits an array into sequences of unique values.
 * Returns an array of arrays, inner arrays contain unique values
 * @param {array} arr - array to be split 
 */
function splitArrToUnique(arr) {
    if (arr === undefined) throw new Error("arr is required");
    let arrArrays = [[]];
    // an outer loop - the items in the basket
    for (const item of arr) {
        let innerLoop = arrArrays.length;
        let placed = false;
        //console.log("inner loop = ",innerLoop);
        // an inner loop - fills arrays with sequences of unique items
        for (let i = 0; i < innerLoop; i++) {
            if (arrArrays[i].includes(item) !== true) {
                if(placed === false){
                    arrArrays[i].push(item);
                    placed = true;
                }   
            } else {
                placed = false;
            }
        }
        // if item was not placed, make new array and place it in there
        if(placed === false){
            let newArray = [item];
            arrArrays.push(newArray);
        }
    }

    //console.log(arrArrays);
    return arrArrays;
}

module.exports = {
    basketPrice,
    splitArrToUnique
};
