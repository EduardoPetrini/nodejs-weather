const requestService = require('../../src/services/request.service');

//https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
describe('Fetch weather API', () => {
  it('should request weather data with valid lat and long', async () => {
    const lat = -21.229179;
    const long = -44.998951;
    const response = await requestService.getApiData(lat, long);

    expect(response).toBeInstanceOf(Object)
  });
});