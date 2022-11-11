const { sum, mul, sub, div, toUpperCase } = require('./math')

describe('Prueba de operaciones matemáticas', () => {
    describe('Prueba de sumas', () => {
        test('Adding 3 + 4 equals 7', () => {
            expect(sum(3, 4)).toBe(7)
        });
        test('Adding 4 + 3 not equal to 6', () => {
            expect(sum(4, 3)).not.toBe(6)
        });
        test('Adding 4 + `1` equals to `41`', () => {
            expect(sum(4, '1')).toMatch('41')
        });    
    });
    describe('Prueba de divisiones', () => {
        test('Dividing 10 / 2 equals 5', () => {
            expect(div(10, 2)).toBe(5)
        });
    
        test('Dividing 10 / perico equals to NaN', ()=>{
            expect(div(10, 'perico')).toBe(NaN)
        });
        test('Dividing 146 / 0 equals to Infinity', () => {
            expect(div(146, 0)).toBe(Infinity)
        })
    })
    test('Multiplying 2 * 1 equals 2', () => {
        expect(mul(2, 1)).toBe(2)
    });

    test('Subtracting 1 - 1 equals 0', () => {
        expect(sub(1, 1)).toBe(0)
    });

})

test('Convert `picajoso` into `PICAJOSO`', () => {
    expect(toUpperCase('picajoso')).toMatch('PICAJOSO')
});