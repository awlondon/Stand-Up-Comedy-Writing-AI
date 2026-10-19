const fs = require('fs');
const path = require('path');

function readContent(filePath) {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
}

function schedulePresentation() {
    const finalPresentation = readContent('../deliverables/final.md');
    const schedule = `# Schedule for Stand-Up Comedy Set Presentation

## Date: 2026-11-01
- Introduction
- Historical Styles
- Iconic Jokes
- Thematic Motifs
- Original Content
- Conclusion

## Presenter: [Presenter Name]
- Location: [Presentation Location]
- Time: [Presentation Time]

${finalPresentation}`;

    fs.writeFileSync(path.join(__dirname, '../deliverables/schedule.md'), schedule);
}

schedulePresentation();
