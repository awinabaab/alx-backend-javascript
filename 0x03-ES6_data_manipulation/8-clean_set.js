export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const arrayFromSet = [...set]
    .filter((string) => typeof string === 'string' && string.startsWith(startString))
    .map((string) => string.slice(startString.length));

  return arrayFromSet.join('-');
}
