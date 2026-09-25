const fs = require('fs');
const path = require('path');

const appPath = path.join(process.cwd(), 'src/App.jsx');
let content = fs.readFileSync(appPath, 'utf8');

// 1. Update getInitialState to use window.location.pathname
content = content.replace(
  "const hash = window.location.hash || '';",
  "const hash = window.location.pathname || '/';"
);
content = content.replace(/hash\.match\(\/#\?\\\/([a-zA-Z0-9-\\\/]+)\)/g, "hash.match(/^\\/$1/)");
content = content.replace(/#\?\\\/\\?hospitals\\\//g, "^\\/hospitals\\/");
content = content.replace(/#\?\\\/\\?specialities\\\//g, "^\\/specialities\\/");
content = content.replace(/#\?\\\/\\?careers\\\//g, "^\\/careers\\/");
content = content.replace(/#\?\\\/\\?blogs?\\\//g, "^\\/blog\\/?");

// 2. Update handleHashChange to handlePopState
content = content.replace('const handleHashChange = () => {', 'const handlePopState = () => {');
content = content.replace("const hash = window.location.hash || '';", "const hash = window.location.pathname || '/';");

content = content.replace("window.addEventListener('hashchange', handleHashChange);", "window.addEventListener('popstate', handlePopState);");
content = content.replace("window.removeEventListener('hashchange', handleHashChange);", "window.removeEventListener('popstate', handlePopState);");

// 3. Update handleNavigate to use pushState
content = content.replace(/window\.location\.hash = `#(.*?)`;/g, "window.history.pushState({}, '', '/$1');");
content = content.replace(/window\.location\.hash = '#(.*?)';/g, "window.history.pushState({}, '', '/$1');");

// 4. Update `#home` or `#` check
content = content.replace("hash === '#home' || hash === '#'", "hash === '/home' || hash === '/'");

fs.writeFileSync(appPath, content, 'utf8');
console.log('App.jsx routing updated successfully.');
