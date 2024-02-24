import { createWorker } from "tesseract.js";

const convertor = async (imageUrl, language) => {
  console.log(imageUrl, language)
  const worker = await createWorker(language);
  const ret = await worker.recognize(imageUrl);
  const text = ret.data.text;
  console.log(text)
  await worker.terminate();
  return text;
};

export default convertor;