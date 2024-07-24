function uploadPhoto(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: 'success'
      };
    }).catch(() => {
      throw Error();
    });
}

function createUser(promise) {
  return promise
    .then(() => {

    }).catch(() => {

    }).finally(() => {

    });
}

export default { uploadPhoto, createUser };
