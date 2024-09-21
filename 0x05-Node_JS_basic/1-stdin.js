require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Start reading from stdin
process.stdin.resume();
process.stdin.setEncoding('utf-8');

// Listen for 'data' event to capture the user's input
process.stdin.on('data', (data) => {
  const name = data.trim(); // Trim the input to remove newlines and spaces

  // If no input was given (i.e., name is an empty string), exit immediately
  if (name === '') {
    process.exit();
  }

  process.stdout.write(`Your name is: ${name}\n`);

  // Check if input is interactive (stdin is TTY)
  if (process.stdin.isTTY) {
    // For interactive input, exit after displaying the name
    process.exit();
  }
});

// Listen for 'end' event to handle EOF properly (especially for piped input)
process.stdin.on('end', () => {
  // This will be triggered for piped input when the stream ends
  process.stdout.write('This important software is now closing\n');
});
