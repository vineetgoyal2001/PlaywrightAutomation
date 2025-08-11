const { test, expect, request } = require('@playwright/test');

test('Make HTTP GET call', async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log(data);
  expect(data).toHaveProperty('id', 1);
  await apiContext.dispose();
});