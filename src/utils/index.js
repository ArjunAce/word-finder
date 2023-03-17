import { createWorker } from 'tesseract.js';

export const getCharactersFromImage = async (image) => {
    if (!image) {
        console.log("tesseract error: invalid file", image);
        return;
    }
    const worker = await createWorker({
        // logger: m => console.log(m)
    });
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(image);
    await worker.terminate();
    return text;
};

export const convertTextToArray = ({ text, splitLetters, removeSpaces }) => {
    text = text.toUpperCase();
    if (removeSpaces) {
        text = text.replace(/[^\S\n]/g, '');
    }

    if (!text) {
        console.log("Invalid string", text);
        return [];
    }

    // Split the string into an array of lines
    const lines = text.split('\n');
    console.log("splitLetters", splitLetters);

    if (splitLetters) {
        // Convert each line into an array of characters
        const characters = lines.map(line => line.split(''));
        return characters;
    }
    return lines;
}

export const getLineCoords = ([point1, point2]) => {
    const blockSize = 50;
    const coords1 = {
        x: point1[1] * blockSize + blockSize / 2,
        y: point1[0] * blockSize + blockSize / 2,
    };
    const coords2 = {
        x: point2[1] * blockSize + blockSize / 2,
        y: point2[0] * blockSize + blockSize / 2,
    };
    return { coords1, coords2 };
};