const {translate} = require("./script.js");


describe('translate', () => {
    //starts with single consonant
    test('translate word starting with single consonant', () => {
        expect(translate('hello')).toEqual('ellohay');
    });

    test('another word starting with a single consonant', () => {
        expect(translate('giraffe')).toEqual('iraffegay');
    });

    //starts with vowel a
    test('translate word starting with vowel a', () => {
        expect(translate('apple')).toEqual('appleway');
    });
    
    //starts with vowel e
    test('translate word starting with vowel e', () => {
        expect(translate('else')).toEqual('elseway');
    });

    //starts with vowel i
    test('translate word starting with vowel i', () => {
        expect(translate('igloo')).toEqual('iglooway');
    });

    //starts with vowel o
    test('translate word starting with vowel o', () => {
        expect(translate('orange')).toEqual('orangeway');
    });

    //starts with vowel u
    test('translate word starting with vowel u', () => {
        expect(translate('umbrella')).toEqual('umbrellaway');
    });

    //starts with 2 consonants
    test('translate word starting with 2 consonants', () => {
        expect(translate('dragon')).toEqual('agondray');
    });

    test('another word starting with 2 consonants', () => {
        expect(translate('broom')).toEqual('oombray');
    });

    //starts with more than 2 consonants
    test('translate word starting with more than 2 consonants', () => {
        expect(translate('chrome')).toEqual('omechray');
    });

    //works with uppercase
    test('translate even if it is uppercase', () => {
        expect(translate('Unicorn')).toEqual('unicornway');
    });

    test('translate another with uppercase', () => {
        expect(translate('Dinosaur')).toEqual('inosaurday');
    });
})