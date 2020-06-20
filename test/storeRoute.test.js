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
      .send({ id: 1, name: "Name store 1", address: "Itaipu, Niterói - RJ"});
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
      .send({ id: 1, name: "New store name", address: "Itaipu, Niterói - RJ" });
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

  test('should get all services of a store', async (done) => {
    // Adding new user that will not have any services
    let res = await request(app).post('/stores')
      .send({ id: 5, name: "Name store 5", address: "Itaipu, Niterói - RJ"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/stores/5');
    
    res = await request(app).get('/stores/5/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);

    // Adding new store that will have one service
    res = await request(app).post('/stores')
      .send({ id: 6, name: "Name store 6", address: "Itaipu, Niterói - RJ"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/stores/6');

    res = await request(app).post('/services')
      .send({ id: 5, description: "Name service 5", userID: 1, storeID: 6});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/5');

    res = await request(app).get('/stores/6/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([{ id: 5, description: "Name service 5", userID: 1, storeID: 6}]);

    // Adding new store that will have one service
    res = await request(app).post('/stores')
      .send({ id: 7, name: "Name store 7", address: "Itaipu, Niterói - RJ"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/stores/7');

    res = await request(app).post('/services')
      .send({ id: 6, description: "Name service 6", userID: 7, storeID: 7});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/6');

    res = await request(app).post('/services')
      .send({ id: 7, description: "Name service 7", userID: 7, storeID: 7});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/7');

    res = await request(app).post('/services')
      .send({ id: 8, description: "Name service 8", userID: 7, storeID: 7});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/8');

    res = await request(app).get('/stores/7/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { id: 6, description: "Name service 6", userID: 7, storeID: 7},
      { id: 7, description: "Name service 7", userID: 7, storeID: 7},
      { id: 8, description: "Name service 8", userID: 7, storeID: 7}
    ]);
    done();
  });
});