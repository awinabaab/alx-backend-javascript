import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  const results = Promise
    .allSettled([photoPromise, userPromise])
    .then((results) => {
      const hasRejection = results.some((result) => result.status === 'rejected');

      if (hasRejection) {
        return {
          photo: null,
          user: null,
        };
      }

      return {
        photo: results[0].value,
        user: results[1].value,
      };
    });

  return results;
}
