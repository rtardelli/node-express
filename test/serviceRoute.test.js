const request = require('supertest');

const app = require('../src/server');
describe('Service Endpoints', () => {
  test('should get all services empty', async (done) => {
    const res = await request(app).get('/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
    done();
  });

  test('should post one service', async (done) => {
    const res = await request(app)
      .post('/services')
      .send({ id: 1, description: "Name service 1", storeID: 3, userID: 1});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/1');
    done();
  });

  test('should get all services with one service', async (done) => {
    const res = await request(app).get('/services');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.length).toEqual(1);
    done();
  });

  test('should get service', async (done) => {
    const res = await request(app).get('/services/1');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.description).toEqual("Name service 1");
    done();
  });

  test('should update service', async (done) => {
    let res = await request(app)
      .put("/services/1")
      .send({ id: 1, description: "New service name", storeID: 3, userID: 1 });
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.description).toEqual("New service name");
    done();
  });

  test('should delete service', async (done) => {
    let res = await request(app).delete("/services/1");
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
    done();
  });

  test('should not delete service', async (done) => {
    let res = await request(app).delete("/services/2");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({});
    done();
  });
});