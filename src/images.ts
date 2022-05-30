import { resizeImage } from './image-resizing';
import { IImagesQuery } from './utils/imagesQueryInterface';
import path from 'path';
import fs from 'fs';

const imagesFullPath = path.resolve(__dirname, '../assets/full');
export const imagesThumbPath = path.resolve(__dirname, '../assets/thumb');

export async function findOrCreateThumb(params: IImagesQuery): Promise<boolean | string> {

  const filePathFull = path.resolve(imagesFullPath, `${params.filename}.jpg`);
  const filePathThumb = path.resolve(
    imagesThumbPath,
    `${params.filename}-${params.width}x${params.height}.jpg`
  );

  if (!fs.existsSync(filePathThumb)) {
    try {
      await resizeImage(
        filePathFull,
        params.width,
        params.height,
        filePathThumb
      );
    } catch (error) {
      // console.log(error);
      return false;
    }
  }

  return filePathThumb;
}