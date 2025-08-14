// Tiny1z API Client - Modern, class-based, and typed

export interface SingleUrlData {
  original_url: string;
  alias?: string;
  password?: string;
  expiry_duration?: number;
  expiry_unit?: 'hours' | 'days' | 'months';
  user_reference?: string;
}

export interface BulkUrlItem {
  url: string;
  alias?: string;
  password?: string;
  expiry_duration?: number;
  expiry_unit?: 'hours' | 'days' | 'months';
}

export interface BulkUrlData {
  original_urls: BulkUrlItem[];
  global_password?: string | null;
  global_expiry_duration?: number | null;
  global_expiry_unit?: 'hours' | 'days' | 'months' | null;
  user_reference?: string;
}

export type SortOrder = 'asc' | 'desc';

export interface Tiny1zClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export default class Tiny1zClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(options: Tiny1zClientOptions | string) {
    if (typeof options === 'string') {
      this.apiKey = options;
      this.baseUrl = 'https://tiny1z.com';
    } else {
      this.apiKey = options.apiKey;
      this.baseUrl = options.baseUrl || 'https://tiny1z.com';
    }
  }

  private async request<T>(endpoint: string, method: string, body?: any): Promise<T> {
    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.apiKey,
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      return await res.json();
    } catch (error) {
      console.error('Tiny1z API error:', error);
      return { error: true, msg: error || 'Failed to fetch data.' } as any;
    }
  }

  /** Shorten a single URL */
  async createSingleUrl(data: SingleUrlData) {
    return this.request('/api/v1/create', 'POST', data);
  }

  /** Shorten multiple URLs in bulk */
  async createBulkUrl(data: BulkUrlData) {
    return this.request('/api/v1/create/bulk', 'POST', data);
  }

  /** Retrieve URLs created by a specific user reference */
  async getUserUrls(reference: string) {
    return this.request(`/api/v1/user?reference=${encodeURIComponent(reference)}`, 'GET');
  }

  /** Get detailed information about a specific short URL */
  async singleUrlInfo(slug: string) {
    return this.request(`/api/v1/user?slug=${encodeURIComponent(slug)}`, 'GET');
  }

  /** Fetch all URLs created by the authenticated user */
  async getAllUrls(offset = 0, limit = 10, sort: SortOrder = 'desc') {
    return this.request(
      `/api/v1/user?offset=${offset}&limit=${limit}&sort=${sort}`,
      'GET'
    );
  }
}