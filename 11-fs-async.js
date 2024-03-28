const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, firstResult) => {
  if (err) {
    console.log('Error reading first.txt:', err);
    return;
  }

  const first = firstResult;

  readFile('./content/second.txt', 'utf-8', (err, secondResult) => {
    if (err) {
      console.log('Error reading second.txt:', err);
      return;
    }

    const second = secondResult;
    const concatenatedContent = first + second;

    writeFile('./content/result-async.txt', concatenatedContent, (err) => {
      if (err) {
        console.log('Error writing to result-async.txt:', err);
        return;
      }
      console.log('done with this task');
    });
  });
});
console.log('starting nxt task');