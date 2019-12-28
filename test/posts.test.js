const request = require('supertest');

const base_url = __BASE_URL__;
const api = request(base_url);
const endpoint = __EP_POSTS__;

describe(`GET-POSTS [${base_url}${endpoint}]`, () => {
  it("should return the list of posts", (done) => {

    api
      .get(endpoint)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should return the post 4 title as "eum et est occaecati"', (done) => {

    api
      .get(endpoint + '/4')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.title).toBe('eum et est occaecati');
        done();
      });
  });

});