import { APIRequestContext } from '@playwright/test';

export async function getProducts(api: APIRequestContext) {
  const response = await api.get('https://dummyjson.com/products');
  return response.json();
}
