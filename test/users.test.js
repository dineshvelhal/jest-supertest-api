const request = require('supertest');

const base_url = __BASE_URL__;
const api = request(base_url);
const endpoint = __EP_USERS__;

describe(`GET-USERS [${base_url}${endpoint}]`, () => {
  it("should return the list of users", (done) => {

    api
      .get(endpoint)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should return the user 1 name as "Leanne Graham"', (done) => {

    api
      .get(endpoint + '/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.name).toBe('Leanne Graham');
        done();
      });
  });

  it('should return city as "Wisokyburgh" for the user with email as "Shanna@melissa.tv"', (done) => {

    api
      .get(endpoint)
      .query({
        'email': 'Shanna@melissa.tv'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body[0].address.city).toBe('Wisokyburgh');
        done();
        //console.log(response.text);
      });
  });

  it('should return the code 404 when a non-existent user is queried', (done) => {

    api
      .get(endpoint + '/20')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});