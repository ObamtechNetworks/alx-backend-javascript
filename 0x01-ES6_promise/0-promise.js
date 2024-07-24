export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Done!');
    } else {
      reject(new Error('Failed'));
    }
  });
}
