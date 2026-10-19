const fs = require('fs');
const path = require('path');

function readContent(filePath) {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
}

function testPresentation() {
    const finalPresentation = readContent('../deliverables/final.md');
    const expectedParts = ['Introduction', 'Historical Styles', 'Iconic Jokes', 'Thematic Motifs', 'Original Content', 'Conclusion'];

    let isCorrect = true;
    expectedParts.forEach(part => {
        if (!finalPresentation.includes(part)) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        console.log('The final presentation is correctly assembled.');
    } else {
        console.error('The final presentation is missing parts.');
    }
}

testPresentation();
