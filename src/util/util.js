export function sanitize(string) {
  const node = document.creatElement("div");
  const text = document.createTextNode(string);
  node.appendChild(text);
  return node.innerHTML;
}

export function diffObjects(older, newer) {
  const result = {};
  Object.entries(newer).forEach(([key, value]) => {
    if (older[key] !== value) {
      result[key] = value;
    }
  });
  return result;
}

export function flatten(array) {
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []
  );
}
