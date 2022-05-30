import sharp from 'sharp';

export const resizeImage = async (sourceFileName: string, width: number, height: number,
  targetFileName: string): Promise<null | boolean> => {
  try {
    await sharp(sourceFileName)
      .resize(width, height)
      .toFormat('jpeg')
      .toFile(targetFileName);
    return true;
  } catch {
    throw new Error("resizeImageFailed");
  }
};
