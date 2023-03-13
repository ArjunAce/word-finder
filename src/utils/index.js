import { createWorker } from 'tesseract.js';
import image from "./image.png";

export const getCharactersFromImage = async (imgUrl) => {
    const worker = await createWorker({
        logger: m => console.log(m)
    });
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(image);
    console.log(text);
    await worker.terminate();
};
