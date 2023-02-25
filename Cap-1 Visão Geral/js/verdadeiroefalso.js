function testTruly(value) {
    return value ? console.log('true') : console.log('false');
}

testTruly(true)
testTruly(false)
testTruly(new Boolean(false)) // objeto é sempre true
testTruly();
testTruly('Packt');


console.log('abc' === 'abc');