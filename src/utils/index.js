import { createWorker } from 'tesseract.js';

export const getCharactersFromImage = async (image) => {
    if (!image) {
        console.log("tesseract error: invalid file", image);
        return;
    }
    const worker = await createWorker({
        logger: m => console.log(m)
    });
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(image);
    console.log(text);
    await worker.terminate();
};
