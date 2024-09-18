console.log('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const inputName = data.toString().trim();
  console.log(`Your name is: ${inputName}`);

  console.log('This important software is now closing');

  process.exit();
});
