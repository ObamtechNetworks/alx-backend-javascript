import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const status = [];
  if (typeof firstName === 'string' && typeof lastName === 'string' && typeof fileName === 'string') {
    return Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]).then((results) => results.forEach((result) => {
      if (result.status === 'fulfilled') {
        status.push({ status: result.status, value: result.value });
      } else if (result.status === 'rejected') {
        status.push({ status: result.status, value: result.reason });
      }
    }));
  }
  return status;
}
