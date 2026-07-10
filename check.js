const fs = require('fs');
const code = fs.readFileSync('app/(dashboard)/home/page.tsx', 'utf8');

let stack = [];
let re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*?)>/g;
let m;
let lineNum = 1;
let lastIndex = 0;

while ((m = re.exec(code))) {
  // count lines
  const substring = code.substring(lastIndex, m.index);
  lineNum += (substring.match(/\n/g) || []).length;
  lastIndex = m.index;

  let isClosing = m[1] === '/';
  let tag = m[2];
  let rest = m[3];
  
  let isSelfClosing = rest.trim().endsWith('/');
  
  // ignore standard self closing
  if (['br','hr','input','img','Image','textarea'].includes(tag) || isSelfClosing) continue;

  if (isClosing) {
    if (stack.length === 0) {
      console.log('Line ' + lineNum + ': Extra closing tag:', tag);
    } else {
      let last = stack.pop();
      if (last.tag !== tag) {
        console.log('Line ' + lineNum + ': Mismatch: expected', last.tag, 'got', tag);
      }
    }
  } else {
    stack.push({tag, line: lineNum});
  }
}
console.log('Left in stack:', stack);
