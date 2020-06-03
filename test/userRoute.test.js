const request = require('supertest');

const app = require('../src/server')
describe('User Endpoints', () => {
  test('should get all users empty', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  test('should post one user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ "id": "1", "name": "Name user 1"});
      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual({});
      expect(res.header['location']).toEqual('/users/1');
  });

  test('should get all users with one user', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);

    const responseBody = res.body;
    expect(typeof(responseBody)).toEqual("Array");
    expect(responseBody.lenght).toEqual(1);
  });
});