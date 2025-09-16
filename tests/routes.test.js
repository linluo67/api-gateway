const request = require('supertest');
const app = require('../src/app');

describe('GET /api/users', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
  });
});
