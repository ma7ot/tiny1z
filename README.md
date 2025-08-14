<p align="center">
  <a href="https://tiny1z.com">
      <img width="20%" src="https://tiny1z.com/assets/logo.png" alt="tiny1z logo" />
      <h1 align="center">Tiny1z URL Shortener API Client</h1>
  </a>
</p>

A modern, lightweight, and type-safe npm package for integrating the [Tiny1z URL Shortener API](https://tiny1z.com) into your JavaScript or TypeScript applications. Easily create short URLs, handle bulk shortening, and manage your links with a simple, class-based API.

---

## Features

- **Create Single URL**: Shorten a single URL with optional settings (password, expiry, alias, etc).
- **Create Bulk URLs**: Shorten multiple URLs in one request.
- **Get User URLs**: Retrieve URLs by user reference.
- **Single URL Info**: Get details about a specific short URL.
- **Get All URLs**: Paginated and sorted retrieval of all your URLs.

---

## Installation

```bash
npm install tiny1z
# or
yarn add tiny1z
```

---

## Get a Tiny1z API Key

1. **Sign up:** [Tiny1z Signup](https://tiny1z.com/signup) (FREE)
2. **Go to your dashboard:** [API Dashboard](https://tiny1z.com/account/api-dashboard) (Free Package Available)
3. **Copy your API key** for use in your app.

---

## Usage

```typescript
import Tiny1zClient from 'tiny1z';

// Replace 'your-api-key' with your actual API key
const apiKey = 'your-api-key';

// Instantiate the client
const client = new Tiny1zClient(apiKey);

// Create a single URL
const singleUrlData = {
  original_url: "https://www.example.com", // Required
  alias: "alias-example",         // Optional
  password: "123456",             // Optional
  expiry_duration: 5,             // Optional
  expiry_unit: "hours",           // Optional: 'hours', 'days', or 'months'
  user_reference: "adam"          // Optional: Any tag or label
};

const singleUrlResponse = await client.createSingleUrl(singleUrlData);

// Create multiple URLs in bulk
const bulkData = {
  original_urls: [
    {
      url: "https://www.example.com",
      alias: "alias-example",
      password: "123456",
      expiry_duration: 5,
      expiry_unit: "hours",
    },
    {
      url: "https://www.example.com"
    }
  ],
  global_password: null,
  global_expiry_duration: null,
  global_expiry_unit: null,
  user_reference: "ali"
};

const bulkUrlResponse = await client.createBulkUrl(bulkData);

// Get user URLs by user reference
const userReference = 'user_reference';
const userUrls = await client.getUserUrls(userReference);

// Get information about a single URL by slug
const slug = 'alias-example';
const singleUrlInfoResponse = await client.singleUrlInfo(slug);

// Get all user URLs with pagination and sorting
const offset = 0;
const limit = 10;
const sort = 'desc'; // or 'asc'
const allUserUrls = await client.getAllUrls(offset, limit, sort);
```

---

## API Documentation

See the [Tiny1z API Documentation](https://t1z.co/tiny1z-api) for endpoint details, parameters, and response formats.

---

## Rate and Usage Limits

- Always include your API key in the `Authorization` header.
- Be aware of Tiny1z API rate limits.

---

## Contributing

Pull requests and issues are welcome! See the [GitHub repository](https://github.com/ma7ot/tiny1z).

---

##