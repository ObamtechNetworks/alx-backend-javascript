function uploadPhoto() {
  // return promise directly
  return new Promise((resolve) => {
  // simulate async operation
    setTimeout(() => resolve({
      status: 200,
      body: 'photo-profile-1',
    }), 100);
  });
}

function createUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    }), 100);
  });
}

export { uploadPhoto, createUser };
