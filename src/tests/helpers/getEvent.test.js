import { getEvent } from '../../helpers/getEvent';

describe('Test on getEvent Fecth', () => {

  test('It should display a 102 code error when it gets a random, non-registred id', async() => {
    const eventResult = await getEvent('random event id');
    expect(eventResult.code).toBe(102);
    expect(eventResult.error).toBe('Improper encode of parameter');
  });

  test('It should display a 102 code error when it gets an empty id', async() => {
    const eventResult = await getEvent('');
    expect(eventResult.code).toBe(102);
    expect(eventResult.error).toBe('Invalid parameter for query: _');
  });

})
