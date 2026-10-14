const fs = require('fs');

const src = fs.readFileSync('dist-artifact/index.html', 'utf8');

let out = src;

// Drop the outer document wrapper tags the Artifact harness supplies itself.
out = out.replace(/^<!doctype html>\s*/i, '');
out = out.replace(/^<html[^>]*>\s*/i, '');
out = out.replace(/<head>\s*/i, '');
out = out.replace(/<\/head>\s*<body>\s*/i, '');
out = out.replace(/\s*<\/body>\s*<\/html>\s*$/i, '\n');

// Redundant with the harness-injected head (charset/viewport) or pointing at
// a favicon file that won't exist inside the artifact bundle.
out = out.replace(/\s*<meta charset="UTF-8" \/>\s*/i, '\n');
out = out.replace(/\s*<meta name="viewport"[^>]*\/>\s*/i, '\n');
out = out.replace(/\s*<link rel="icon"[^>]*\/>\s*/i, '\n');

fs.writeFileSync('dist-artifact/artifact-source.html', out);
console.log('bytes out:', Buffer.byteLength(out, 'utf8'));
console.log('--- first 800 chars ---');
console.log(out.slice(0, 800));
console.log('--- last 300 chars ---');
console.log(out.slice(-300));
