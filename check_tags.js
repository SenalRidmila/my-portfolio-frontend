const fs = require('fs');
const code = fs.readFileSync('src/App.jsx', 'utf-8');

// Basic stack to track div and motion.div
const stack = [];
const lines = code.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Find opening divs
    const openDivs = [...line.matchAll(/<div[^>]*>/g)];
    for (const match of openDivs) {
        if (!line.includes('/>') && !match[0].endsWith('/>')) {
            stack.push({ tag: 'div', line: i + 1 });
        }
    }

    // Find opening motion.divs
    const openMotionDivs = [...line.matchAll(/<motion\.div[^>]*>/g)];
    for (const match of openMotionDivs) {
        if (!line.includes('/>') && !match[0].endsWith('/>')) {
            stack.push({ tag: 'motion.div', line: i + 1 });
        }
    }

    // Find closing divs
    const closeDivs = [...line.matchAll(/<\/div>/g)];
    for (const match of closeDivs) {
        const last = stack.pop();
        if (last && last.tag !== 'div' && last.tag !== 'motion.div') {
            console.log(`Mismatch at line ${i + 1}: expected closing for ${last.tag} from line ${last.line}, found </div>`);
        }
    }

    // Find closing motion.divs
    const closeMotionDivs = [...line.matchAll(/<\/motion\.div>/g)];
    for (const match of closeMotionDivs) {
        const last = stack.pop();
        if (last && last.tag !== 'motion.div' && last.tag !== 'div') {
            console.log(`Mismatch at line ${i + 1}: expected closing for ${last.tag} from line ${last.line}, found </motion.div>`);
        }
    }
}

if (stack.length > 0) {
    console.log("Unclosed tags remaining:");
    console.log(stack);
} else {
    console.log("All div and motion.div tags matched!");
}
