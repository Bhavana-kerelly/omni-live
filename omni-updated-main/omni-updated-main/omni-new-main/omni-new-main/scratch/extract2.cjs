const fs = require('fs');
const data = fs.readFileSync('src/data/doctorsData.js', 'utf8');
const lines = data.split('\n');
let inDoc = false;
let docName='';
let docSlug='';
let docBranch='';
const res = [];
lines.forEach(l => {
  if (l.includes('{')) { inDoc = true; docName=''; docSlug=''; docBranch=''; }
  const n = l.match(/"name":\s*"(.*?)"/);
  if(n) docName=n[1];
  const s = l.match(/"slug":\s*"(.*?)"/);
  if(s) docSlug=s[1];
  const b = l.match(/"branch":\s*"(.*?)"/);
  if(b) docBranch=b[1];
  if (l.includes('}') && inDoc) {
    if (docBranch && docBranch.toLowerCase().includes('udai')) {
      res.push('* **' + docName + '** -> `' + docSlug + '.jpg`');
    }
    inDoc=false;
  }
});
fs.writeFileSync('scratch/output2.md', res.join('\n'));
