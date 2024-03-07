// const url = 'http://localhost:3000';
const url = 'https://tiny1z.com'; // LIVE

export const createSingleUrl = async (data: any, apiKey: string): Promise<any> => {
  try {
    const response: any = await fetch(`${url}/api/v1/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: true, msg: error || 'Failed to fetch data.' };
  }
};

export const createBulkUrl = async (data: any, apiKey: string): Promise<any> => {
  try {
    const response: any = await fetch(`${url}/api/v1/create/bulk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: true, msg: error || 'Failed to fetch data.' };
  }
};

export const getUserUrls = async (reference: string, apiKey: string): Promise<any> => {
  try {
    const response: any = await fetch(`${url}/api/v1/user?reference=${reference}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: true, msg: error || 'Failed to fetch data.' };
  }
};

export const singleUrlInfo = async (slug: string, apiKey: string): Promise<any> => {
  try {
    const response: any = await fetch(`${url}/api/v1/user?slug=${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: true, msg: error || 'Failed to fetch data.' };
  }
};

export const getAllUrls = async (offset: number, limit: number, sort: string, apiKey: string): Promise<any> => {
  try {
    const response: any = await fetch(
      `${url}/api/v1/user?offset=${offset}&limit=${limit}&sort=${sort}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: apiKey,
        },
      }
    );

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: true, msg: error || 'Failed to fetch data.' };
  }
};
