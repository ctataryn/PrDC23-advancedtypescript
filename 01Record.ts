type Foo = Record<'id' | 'name', string>;

function main() {
  const foo: Foo = { id: '123', name: 'Teddy' };
  console.log(foo);
}

main();