export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const uint8TypedArray = new Uint8Array(length);
  uint8TypedArray[position] = value;

  const { buffer } = uint8TypedArray;

  return new DataView(buffer);
}
