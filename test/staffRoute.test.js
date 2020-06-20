const request = require('supertest');

const app = require('../src/server')
describe('staff Endpoints', () => {
  test('should get all staffs empty', async (done) => {
    const res = await request(app).get('/staffs');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
    done();
  });

  test('should post one staff', async (done) => {
    const res = await request(app)
      .post('/staffs')
      .send({ id: 1, name: "Name staff 1"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/staffs/1');
    done();
  });

  test('should get all staffs with one staff', async (done) => {
    const res = await request(app).get('/staffs');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.length).toEqual(1);
    done();
  });

  test('should get staff', async (done) => {
    const res = await request(app).get('/staffs/1');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("Name staff 1");
    done();
  });

  test('should update staff', async (done) => {
    let res = await request(app)
      .put("/staffs/1")
      .send({ id: 1, name: "New staff name" });
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("New staff name");
    done();
  });

  test('should delete staff', async (done) => {
    let res = await request(app).delete("/staffs/1");
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
    done();
  });

  test('should not delete staff', async (done) => {
    let res = await request(app).delete("/staffs/2");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({});
    done();
  });

  test('should get all services of a staff', async (done) => {
    // Adding new staff that will not have any services
    let res = await request(app).post('/staffs')
      .send({ id: 5, name: "Name staff 5"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/staffs/5');
    
    res = await request(app).get('/staffs/5/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);

    // Adding new staff that will have one service
    res = await request(app).post('/staffs')
      .send({ id: 6, name: "Name staff 6"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/staffs/6');

    res = await request(app).post('/services')
      .send({ id: 10, description: "Name service 10", userID: 1, storeID: 2, staffID: 6});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/10');

    res = await request(app).get('/staffs/6/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([{ id: 10, description: "Name service 10", userID: 1, storeID: 2, staffID: 6}]);

    // Adding new staff that will have one service
    res = await request(app).post('/staffs')
      .send({ id: 7, name: "Name staff 7"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/staffs/7');

    res = await request(app).post('/services')
      .send({ id: 11, description: "Name service 11", userID: 7, storeID: 1, staffID: 7});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/11');

    res = await request(app).post('/services')
      .send({ id: 12, description: "Name service 12", userID: 7, storeID: 1, staffID: 7});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/12');

    // Adding services with no staff association
    res = await request(app).post('/services')
      .send({ id: 13, description: "Name service 13", userID: 7, storeID: 1});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/services/13');

    res = await request(app).get('/staffs/7/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { id: 11, description: "Name service 11", userID: 7, storeID: 1, staffID: 7},
      { id: 12, description: "Name service 12", userID: 7, storeID: 1, staffID: 7},
    ]);
    done();
  });
});