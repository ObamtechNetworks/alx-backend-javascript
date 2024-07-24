import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    // call the two promises and use await that they finish
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
