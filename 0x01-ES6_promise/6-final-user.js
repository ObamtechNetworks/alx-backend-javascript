import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// eslint-disable-next-line consistent-return
export default function handleProfileSignup(firstName, lastName, fileName) {
  if (typeof firstName === 'string' || typeof lastName === 'string' || typeof fileName === 'string') {
    return Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]).then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: result.status, value: result.value };
      }
      return { status: result.status, value: result.reason };
    }));
  }
}
