"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_helper_1 = require("./string.helper");
describe('toCamelCase', function () {
    test('When a string is already in camel case, then it stays in camel case', function () {
        var result = string_helper_1.StringHelper.toCamelCase('hello_world');
        var expected = 'helloWorld';
        expect(result).toEqual(expected);
    });
    test('When a string is given, then it is converted to camel case', function () {
        var result = string_helper_1.StringHelper.toCamelCase('hello_world');
        var expected = 'helloWorld';
        expect(result).toEqual(expected);
    });
    test('When a string with underscore is given, then it is converted to camel case', function () {
        var result = string_helper_1.StringHelper.toCamelCase('__hello_world__');
        var expected = '__helloWorld__';
        expect(result).toEqual(expected);
    });
});
