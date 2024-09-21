require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Start reading from stdin
process.stdin.resume();
process.stdin.setEncoding('utf-8');

// Listen for 'data' event to capture the user's input
process.stdin.on('data', (data) => {
  const name = data.trim(); // Remove any trailing newline or spaces
  process.stdout.write(`Your name is: ${name}\n`);

  // If input is interactive (stdin is TTY), exit after displaying the name
  if (process.stdin.isTTY) {
    process.exit();
  }
});

// Listen for the 'end' event to handle piped input and print the closing message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
