const {
    basketPrice, splitArrToUnique
} = require('../functions/potter_kata');

describe('splitArrToUnique', () => {
    test('no duplicates so just one array', () => {
        const arrBasket1 = ["h1","h2","h3"];
        expect(splitArrToUnique(arrBasket1)).toEqual([["h1","h2","h3"]]);
    });    
    test('splits an array in two', () => {
        const arrBasket2 = ["h1","h1","h2","h2","h3","h3","h4","h5"];
        expect(splitArrToUnique(arrBasket2)).toEqual([["h1","h2","h3","h4","h5"], ["h1","h2","h3"]]);
    });
    test('splits an array in three', () => {
        const arrBasket3 = ["h1","h1","h1","h2","h2","h3","h3","h4","h5"];
        expect(splitArrToUnique(arrBasket3)).toEqual([["h1","h2","h3","h4","h5"], ["h1","h2","h3"],["h1"]]);
    });   
});

describe('basketPrice', () => {
    test('empty basket returns 0', () => {
        expect(basketPrice([])).toBe(0);
    });

    test('one book returns 8', () => {
        expect(basketPrice(['h1'])).toBe(8);
    });    
});