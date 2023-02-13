function stringValidator(obj) {
  const items = [...obj];
  Object.keys(obj).forEach((key) => {
    items[key].replace("'", "''");
    items[key].replace('"', "'");
  });
  return items;
}

module.exports = stringValidator;
