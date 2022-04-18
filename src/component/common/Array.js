export default function createArray(length) {
  return [...Array(length)]; // (5) [undefined, undefined, undefined, undefined, undefined]
}
// const createArray2 = (length) => Array(length); // (5) [empty × 5]
