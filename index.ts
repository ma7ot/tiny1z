const BASE_URL = 'https://tiny1z.com';

interface UrlData {
  // define expected fields here
  url: string;
  [key: string]: any;
}

interface ApiResponse<T = any> {
  error?: boolean;
  msg?: string;
  data?: T;
}

class Tiny1zClient {
  private apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) throw new Error('API key is required');
    this.apiKey = apiKey;
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.apiKey,
          ...(options.headers || {}),
        },
      });
      if (!response.ok) {
        return { error: true, msg: `HTTP error: ${response.status}` };
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      return { error: true, msg: (error as Error).message || 'Failed to fetch data.' };
    }
  }

  createSingleUrl(data: UrlData): Promise<ApiResponse> {
    return this.request('/api/v1/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  createBulkUrl(data: UrlData[]): Promise<ApiResponse> {
    return this.request('/api/v1/create/bulk', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  getUserUrls(reference: string): Promise<ApiResponse> {
    return this.request(`/api/v1/user?reference=${encodeURIComponent(reference)}`, {
      method: 'GET',
    });
  }

  singleUrlInfo(slug: string): Promise<ApiResponse> {
    return this.request(`/api/v1/user?slug=${encodeURIComponent(slug)}`, {
      method: 'GET',
    });
  }

  getAllUrls(offset: number, limit: number, sort: string): Promise<ApiResponse> {
    return this.request(`/api/v1/user?offset=${offset}&limit=${limit}&sort=${encodeURIComponent(sort)}`, {
      method: 'GET',
    });
  }
}

export default Tiny1zClient;