const spinnerChar = ["|", "/", "-", "\\", "|"];
let delay = 100;

for (const spinner of spinnerChar) {
  setTimeout(() => {
    process.stdout.write('\r' + spinner + '   ');
  }, delay += 200);
}