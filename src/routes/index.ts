import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.use('/api/images', images);

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('<h1>Udacity_Image_Processing_API_Adv</h1><p>Listening at <code><a href="/api/images">/api/images</a></code>. u can use width=200&height=200 for example to set the size:<ol><li><a href="/api/images?filename=santamonica">/api/images?filename=santamonica</a></li><li><a href="/api/images?filename=santamonica&width=100&height=100">/api/images?filename=santamonica&width=100&height=100</a></li></ol></p>'
  );
});

export default routes;