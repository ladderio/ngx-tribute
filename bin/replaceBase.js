#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../docs/index.html');

let content = fs.readFileSync(file, { encoding: 'utf8' });
content = content.replace("<base href=\"/\">", "<base href=\"/ngx-tribute/\">");
fs.writeFileSync(file, content);