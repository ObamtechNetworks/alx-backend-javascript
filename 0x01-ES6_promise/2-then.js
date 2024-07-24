export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({
    status: 200,
    body: 'success',
  })).catch(() => {
    throw Error({ Error: 'Error' });
  }).finally(() => {
    console.log('Got a response from the API');
  });
}
