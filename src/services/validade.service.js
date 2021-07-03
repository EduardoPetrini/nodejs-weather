module.exports.input = (lat, long) => {
  if (!lat || !long) return null;
  return { lat, long };
}