import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise
    .allSettled([userPromise, photoPromise])
    .then((results) => {
      const arr = [];
      results.forEach((result) => arr.push({
        status: result.status,
        value: result.reason ? `${result.reason.name}: ${result.reason.message}` : result.value,
      }));
      return arr;
    });
}
