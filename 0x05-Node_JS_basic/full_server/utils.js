import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

async function readDatabase(filePath) {
  try {
    const data = await readFileAsync(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const fields = {};

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
