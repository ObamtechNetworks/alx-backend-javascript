// full_server/utils.js
import { readFile } from 'fs/promises';

// eslint-disable-next-line import/prefer-default-export
export const readDatabase = async (filePath) => {
  try {
    const data = await readFile(filePath, { encoding: 'utf8' });
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const result = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (field) {
        if (!result[field]) result[field] = [];
        result[field].push(firstName);
      }
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
