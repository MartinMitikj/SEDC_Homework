console.log("Hello")


function parametar(input) {
  const type = typeof input;
  console.log(`Type of ${input}: ${type}`);
  return type;
}

parametar({});
parametar(true);
parametar(5);
parametar("Hello");
parametar(undefined);