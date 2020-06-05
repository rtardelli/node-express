const request = require('supertest');

const app = require('../src/server')
describe('staff Endpoints', () => {
  test('should get all staffs empty', async () => {
    const res = await request(app).get('/staffs');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  test('should post one staff', async () => {
    const res = await request(app)
      .post('/staffs')
      .send({ id: 1, name: "Name staff 1"});
      expect(res.statusCode).toEqual(201);
      expect(res.body).toEqual({});
      expect(res.header['location']).toEqual('/staffs/1');
  });

  test('should get all staffs with one staff', async () => {
    const res = await request(app).get('/staffs');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.length).toEqual(1);
  });

  test('should get staff', async () => {
    const res = await request(app).get('/staffs/1');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("Name staff 1");
  });

  test('should update staff', async () => {
    let res = await request(app)
      .put("/staffs/1")
      .send({ id: 1, name: "New staff name" });
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("New staff name");
  });

  test('should delete staff', async () => {
    let res = await request(app).delete("/staffs/1");
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
  });

  test('should not delete staff', async () => {
    let res = await request(app).delete("/staffs/2");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({});
  });
});