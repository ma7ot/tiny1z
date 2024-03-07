import { createSingleUrl } from './index';

test('adds two numbers correctly', async () => {
  const result = await createSingleUrl({original_url: 'www.example.com'}, "83274938247632894");
  console.log('result', result)
 // expect(result).toBe(5);
});