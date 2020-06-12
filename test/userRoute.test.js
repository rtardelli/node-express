const request = require('supertest');

const app = require('../src/server')
describe('User Endpoints', () => {
  test('should get all users empty', async (done) => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
    done();
  });

  test('should post one user', async (done) => {
    const res = await request(app)
      .post('/users')
      .send({ id: 1, name: "Name user 1"});
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({});
    expect(res.header['location']).toEqual('/users/1');
    done();
  });

  test('should get all users with one user', async (done) => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.length).toEqual(1);
    done();
  });

  test('should get user', async (done) => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("Name user 1");
    done();
  });

  test('should update user', async (done) => {
    let res = await request(app)
      .put("/users/1")
      .send({ id: 1, name: "New user name" });
    expect(res.statusCode).toEqual(200);
    const responseBody = res.body;
    expect(responseBody.id).toEqual(1);
    expect(responseBody.name).toEqual("New user name");
    done();
  });

  test('should delete user', async (done) => {
    let res = await request(app).delete("/users/1");
    expect(res.statusCode).toEqual(204);
    expect(res.body).toEqual({});
    done();
  });

  test('should not delete user', async (done) => {
    let res = await request(app).delete("/users/2");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({});
    done();
  });

  // test('should get all services empty', async (done) => {
  //   const res = await request(app).get('/services');
  //   expect(res.statusCode).toEqual(200);
  //   expect(res.body).toEqual([]);
  //   done();
  // });
  // test('should get all services', async (done) => {
  //   // Adding user
  //   const res = await request(app)
  //     .post('/users')
  //     .send({ id: 5, name: "Name user 5"});
  //   expect(res.statusCode).toEqual(201);
  //   expect(res.body).toEqual({});
  //   expect(res.header['location']).toEqual('/users/5');
  //   const res = await request(app)
  //     .post('/services')
  //     .send({ id: 1, name: "Name service 5", userID: 5});
  //   expect(res.statusCode).toEqual(201);
  //   expect(res.body).toEqual({});
  //   expect(res.header['location']).toEqual('/service/1');
  //   done();
  // });
});