const validadeService = require('../../src/services/validade.service');

describe('Validate input', () => {
  it('should return null by invalid input', () => {
    const response = validadeService.input();

    expect(response).toBeNull();
  });
});
