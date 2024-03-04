import { createWorker } from "tesseract.js";

const convertor = async (imageUrl, language) => {
  const worker = await createWorker(language);
  const ret = await worker.recognize(imageUrl);
  const text = ret.data.text;
  await worker.terminate();
  return text;
};

export default convertor;