export default function createInt8TypedArray(length, position, value) {
  // Create a buffer to hold the typed arrays
  const buffer = new ArrayBuffer(length);

  // Create data view for the buffer
  const view = new DataView(buffer);

  // Check if position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Store value in the buffer as int8
  view.setInt8(position, value);

  // Return the DataView
  return view;
}
