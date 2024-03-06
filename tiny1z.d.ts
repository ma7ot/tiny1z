declare module 'tiny1z' {
    export function createSingleUrl(data: any, apiKey: string): Promise<any>;
    export function createBulkUrl(data: any, apiKey: string): Promise<any>;
    export function getUserUrls(reference: string, apiKey: string): Promise<any>;
    export function singleUrlInfo(slug: string, apiKey: string): Promise<any>;
    export function getAllUrls(offset: number, limit: number, sort: string, apiKey: string): Promise<any>;
  }
  