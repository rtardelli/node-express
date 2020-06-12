const request = require('supertest');

const app = require('../src/server')
describe('store Endpoints', () => {
  test('should get all stores empty', async (done) => {
    const res = await request(app).get('/stores');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
    done();
  });

  test('should post one store', async (done) => {
    const res = await request(app)
      .post('/stores')
      .send({ id: 1, name: "Name store 1"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/stores/1');
    done();
  });

  test('should get all stores with one store', async (done) => {
    const res = await request(app).get('/stores');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.length).toEqual(1);
    done();
  });

  test('should get store', async (done) => {
    const res = await request(app).get('/stores/1');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("Name store 1");
    done();
  });

  test('should update store', async (done) => {
    let res = await request(app)
      .put("/stores/1")
      .send({ id: 1, name: "New store name" });
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("New store name");
    done();
  });

  test('should delete store', async (done) => {
    let res = await request(app).delete("/stores/1");
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
    done();
  });

  test('should not delete store', async (done) => {
    let res = await request(app).delete("/stores/2");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({});
    done();
  });
});