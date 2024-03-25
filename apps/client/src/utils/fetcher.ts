import axios from 'axios';

/**
 * Fetches data from the specified URL using axios.
 *
 * @param url - The URL to fetch data from.
 * @returns A Promise that resolves to the fetched data.
 */
export const fetcher = async (
  url: string,
  type: 'get' | 'put' | 'delete' | 'post'
) => {
  const response = await axios[type](url);

  return response.data;
};
