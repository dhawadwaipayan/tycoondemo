const fs = require('fs');
const content = fs.readFileSync('app/(dashboard)/home/page.tsx', 'utf8');

let stack = [];
const tagRegex = /<\/?([a-zA-Z0-9]+)[^>]*>/g;

let match;
let lineNumber = 1;
let lastIndex = 0;

while ((match = tagRegex.exec(content)) !== null) {
  // Count lines
  const substring = content.substring(lastIndex, match.index);
  lineNumber += (substring.match(/\n/g) || []).length;
  lastIndex = match.index;

  const fullTag = match[0];
  const tagName = match[1];

  // Skip self-closing
  if (fullTag.endsWith('/>')) continue;
  
  if (['br', 'hr', 'input', 'img', 'Image', 'textarea'].includes(tagName)) {
    continue;
  }

  if (fullTag.startsWith('</')) {
    const last = stack.pop();
    if (!last || last.name !== tagName) {
      console.log(`Mismatch at line ${lineNumber}: Expected </${last ? last.name : '?'}> but found ${fullTag}`);
    }
  } else {
    stack.push({ name: tagName, line: lineNumber });
  }
}

console.log("Remaining in stack:", stack.map(s => `${s.name} at line ${s.line}`));
