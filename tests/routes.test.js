const request = require('supertest');
const app = require('../src/app');

describe('API Routes', () => {
  test('GET /health should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'OK' });
  });

  test('GET /api/users should return 401 without auth', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(401);
  });
});