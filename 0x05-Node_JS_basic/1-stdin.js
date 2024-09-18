process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const inputName = data.toString().trim();
  console.log(`Your name is: ${inputName}`);

  process.stdout.write('This important software is now closing');

  process.exit();
});
