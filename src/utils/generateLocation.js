export const generateLocation = () => {
  const lat = Math.floor(Math.random() * 90);
  const long = Math.floor(Math.random() * 180);
  return { lat, long };
};
