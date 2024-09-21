require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  const name = data.trim(); // Trim input to remove extra newlines
  process.stdout.write(`Your name is: ${name}\n`);

  // Close stdin, signaling the program that input is done
  process.stdin.pause(); // proper handling for piped input like echo "John" | node program.js

  // End message after input is processed
  process.stdout.write('This important software is now closing\n');
  process.exit(); // Exit after writing closing message
});
