const fs = require('fs');
const path = require('path');

function replaceHashHref(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/href="#/g, 'href="/');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Fixed:', filePath);
    }
  }
}

const filesToFix = [
  'src/components/HomePage/HomeHeader.jsx',
  'src/components/HomePage/HomeFooter.jsx'
];

filesToFix.forEach(f => replaceHashHref(path.join(process.cwd(), f)));
