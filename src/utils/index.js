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

export const convertWordsTo2DArray = (words) => {
    // Remove white spaces from the input string
    const sanitizedString = words.toUpperCase().replace(/[^\S\n]/g, '');
    if (!sanitizedString) {
        console.log("Invalid string", sanitizedString);
        return [];
    }

    // Split the string into an array of lines
    const lines = sanitizedString.split('\n');

    // Convert each line into an array of characters
    const characters = lines.map(line => line.split(''));

    return characters;
}