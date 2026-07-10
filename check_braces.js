const fs = require('fs');
const content = fs.readFileSync('app/(dashboard)/home/page.tsx', 'utf8');

for (let i = 0; i < content.length; i++) {
  if (content[i] === '}') {
    // Look backward for an opening {
    // If it's inside JSX text, SWC complains.
    // We can just print the lines with } to see if any look weird.
  }
}

const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('}')) {
    let openCount = (line.match(/{/g) || []).length;
    let closeCount = (line.match(/}/g) || []).length;
    if (closeCount > openCount) {
      console.log(`Line ${idx + 1}: ${line}`);
    }
  }
});
