const fs = require('fs');
const path = require('path');

function runScripts() {
    const scripts = ['presentation', 'test', 'schedule'];

    scripts.forEach(script => {
        const scriptPath = path.join(__dirname, `${script}.js`);
        require(scriptPath)();
    });
}

runScripts();
