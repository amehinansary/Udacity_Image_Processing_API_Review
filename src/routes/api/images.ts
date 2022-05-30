import express from 'express';
import { findOrCreateThumb } from '../../images';

const images = express.Router();

const availableImages = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica'
];

images.get(
  '/',
  async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    try {
      const width = parseInt(request.query.width as string, 10);
      const height = parseInt(request.query.height as string, 10);
      const filename = (request.query.filename || "") as string;
      if (
        !availableImages.includes(filename) ||
        width < 1 ||
        height < 1
      )
        throw new Error('validatation error!');

      const image = await findOrCreateThumb({ width, height, filename });

      if (image === false) {
        throw new Error("Couldn't find or create the image");
      }
      response.sendFile(image as string);
      return;
    } catch (error: unknown) {
      if (error instanceof Error)
        response.send(error.message);
      return;
    }
  }
);

export default images;
