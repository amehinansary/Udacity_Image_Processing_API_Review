import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('test the responses from endpoints', (): void => {
  describe('endpoint: /', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('endpoint: /api/images', (): void => {
    it('gets /api/images?filename=santamonica (valid)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?filename=santamonica'
      );

      expect(response.status).toBe(200);
    });

    it('gets /api/images?filename=santamonica&width=300&height=200 (valid)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?filename=santamonica&width=199&height=199'
      );

      expect(response.status).toBe(200);
    });

    it('gets /api/images?filename=santamonica&width=-200&height=200 (invalid)', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?filename=santamonica&width=-200&height=200'
      );

      expect(response.status).toBe(200);
    });
  });
});
