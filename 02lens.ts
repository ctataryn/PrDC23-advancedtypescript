type UpdateProp<T, Prop extends keyof T, Updated> = Omit<T, Prop> & Record<Prop, Updated>;
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
export function update<T extends object>() {
  return function <Prop extends keyof T, Updated>(prop: Prop, fn: (oldVal: T[Prop]) => Updated) {
    return (obj: T): UpdateProp<T, Prop, Updated> => ({ ...obj, [prop]: fn(obj[prop]) });
  };
}
type Employee = {
  id: string;
  salary: number;
  sin: string;
}

const emp = {
  id: '123456',
  salary: 12000,
  sin: '69349484'

}

const encryptString = (str: string): string => {
  return str.split('').map((c, index) => String.fromCharCode(c.charCodeAt(0) + (index + 1))).join('');
}
// eslint-disable-line...
const employeeUpdater = update<Employee>();

const updatedEmp = employeeUpdater('sin', encryptString)(emp);

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