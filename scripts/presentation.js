const fs = require('fs');
const path = require('path');

function readContent(filePath) {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
}

function generatePresentation() {
    const introduction = readContent('../deliverables/parts/01-introduction.md');
    const historicalStyles = readContent('../deliverables/parts/02-historical-styles.md');
    const iconicJokes = readContent('../deliverables/parts/03-iconic-jokes.md');
    const thematicMotifs = readContent('../deliverables/parts/04-thematic-motifs.md');
    const originalContent = readContent('../deliverables/parts/05-original-content.md');
    const conclusion = readContent('../deliverables/parts/06-conclusion.md');

    const presentation = `${introduction}\n${historicalStyles}\n${iconicJokes}\n${thematicMotifs}\n${originalContent}\n${conclusion}`;

    fs.writeFileSync(path.join(__dirname, '../deliverables/final.md'), presentation);
}

generatePresentation();
