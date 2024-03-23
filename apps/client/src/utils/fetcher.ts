import axios from 'axios';

/**
 * Fetches data from the specified URL using axios.
 *
 * @param url - The URL to fetch data from.
 * @returns A Promise that resolves to the fetched data.
 */
export const fetcher = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
};
