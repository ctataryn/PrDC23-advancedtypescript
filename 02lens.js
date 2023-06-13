"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
/**
 * Returns a function that takes a property and a function and returns another function that
 * updates the property in an object by calling a function with the previous value of the property
 *
 * @example
 * // Given the property
 * type Wizard = { name: string; magicalObjects: readonly string[] };
 * const john: Wizard = { name: 'John Constantine', magicalObjects: ['Hat', 'Rock', 'House'] };
 *
 * // When doing the update
 * const actual = updateProperty<Wizard>()('magicalObjects', (arr) => arr.length)(john);
 *
 * // Then
 * expect(actual).toEqual({ name: 'John Constantine', magicalObjects: 3 });
 */
function update() {
    return function (prop, fn) {
        return function (obj) {
            var _a;
            return (__assign(__assign({}, obj), (_a = {}, _a[prop] = fn(obj[prop]), _a)));
        };
    };
}
exports.update = update;
var emp = {
    id: '123456',
    salary: 12000,
    sin: '69349484'
};
var encryptString = function (str) {
    return str.split('').map(function (c, index) { return String.fromCharCode(c.charCodeAt(0) + (index + 1)); }).join('');
};
// eslint-disable-line...
var employeeUpdater = update();
var updatedEmp = employeeUpdater('sin', encryptString)(emp);
console.log(emp);
console.log(updatedEmp);
/*
const empUpdater = update<Employee>()
pipe(
  empUpdater('name', ....),
  empUpdater('wand', ....),
  ....
)
*/ 
