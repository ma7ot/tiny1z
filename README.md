<p align="center">
  <a href="https://nextui.org">
      <img width="20%" src="https://tiny1z.com/assets/logo.png" alt="nextui" />
      <h1 align="center">Tiny1z URL Shortner  API Client</h1>
  </a>
</p>

The Tiny1z API Client is a powerful and lightweight npm package designed to simplify the integration of Tiny1z URL Shortener API into your applications. This client provides functions to create short URLs, retrieve user-specific URLs, get information about a single URL, and fetch all created URLs.

## Features

- **Create Single URL**: Shorten a single URL with optional settings like password protection and expiry.
- **Create Bulk URL**: Shorten multiple URLs in bulk.
- **Get User URLs**: Retrieve URLs created by a specific user reference.
- **Single URL Info**: Get detailed information about a specific short URL.
- **Get All URLs**: Fetch all URLs created by the authenticated user.

## Installation

```bash
npm install tiny1z
```

## Get a Tiny1z API Key

To integrate the Tiny1z API into your applications, you'll need a Tiny1z API key. Follow these steps to obtain your API key:

1. **Sign up for a Tiny1z account:**
   - If you don't already have a Tiny1z account, sign up by visiting [Tiny1z Signup](https://tiny1z.com/signup).

2. **Access your developer dashboard:**
   - Log in to your Tiny1z account and navigate to the [Tiny1z developer dashboard](https://tiny1z.com/account/api-dashboard).

3. **Retrieve your API key:**
   - In the developer dashboard, locate the section that provides your API key.
   - Copy the API key; you will need it for making requests to the Tiny1z API.

Now you are ready to start using the Tiny1z api.

Example:
```javascript
import { createSingleUrl } from 'tiny1z';

const apiKey = 'your-api-key';
const data = {
  originalUrl: 'https://www.example.com',
  // additional data...
};

const response = await createSingleUrl(data, apiKey);
```

## Usage

```javascript
// Import Tiny1z API functions
import { createSingleUrl, createBulkUrl, getUserUrls, singleUrlInfo, getAllUrls } from 'tiny1z';

// Replace 'your-api-key' with your actual API key
const apiKey = 'your-api-key';

// Create a single URL
const singleUrlData = {
    "original_url": "https://www.example.com", // Required: The original URL to be shortened.
    "alias": "alias-example", // Optional: A custom alias for the shortened URL.
    "password": "123456", // Optional: A password to access the url
    "expiry_duration": 5, // Optional: Expiry duration
    "expiry_unit": "hours", // Optional: Expiry unit. Accepts 'hours', 'days' or 'months' only.
    "user_reference": "adam" // Optional: Any tag like a user_id or anything you wish to label this url with
};

const singleUrlResponse = await createSingleUrl(singleUrlData, apiKey);

// Create multiple URLs in bulk
const bulkData = {
  "original_urls": [
    {
      "url": "https://www.example.com", // Required: The original URL to be shortened.
      "alias": "alias-example", // Optional: A custom alias for the shortened URL.
      "password": "123456", // Optional: A password to access the url  **overrides the global password**
      "expiry_duration": 5, // Optional: Expiry duration
      "expiry_unit": "hours", // Optional: Expiry unit. Accepts ('hours', 'days' or 'months') only.
    },
    {
      "url": "https://www.example.com"
    }
  ],
  "global_password": null,
  "global_expiry_duration": null,
  "global_expiry_unit": null,
  "user_reference": "ali" // Optional: Any tag like a user_id, username or anything you wish to label this urls with
};


const bulkUrlResponse = await createBulkUrl(bulkData, apiKey);

// Get user URLs by user reference
const userReference = 'user_reference'; // Required: The user reference used when creating the URLs.
const userUrls = await getUserUrls(userReference, apiKey);

// Get information about a single URL by slug
const slug = 'alias-example'; // Required: The slug/alias of the short URL you want to fetch.
const singleUrlInfoResponse = await singleUrlInfo(slug, apiKey);

// Get all user URLs with pagination and sorting
const offset = 0; // Required: The starting index from which the data should be fetched.
const limit = 10; // Required: The maximum number of rows to be fetched.
const sort = 'desc'; // Required: The sorting method for the fetch operation ('desc' or 'asc').
const allUserUrls = await getAllUrls(offset, limit, sort, apiKey);

```

# API Documentation

For detailed information on API endpoints, parameters, and response formats, refer to the [Tiny1z API Documentation](https://t1z.li/tiny1z-api).

## Rate and Usage Limits

Be aware of the rate and usage limits when using the Tiny1z API. Ensure you include your API key in the Authorization header for each request.

## Contributing

If you'd like to contribute to the development of this package, feel free to submit pull requests or open issues on the [GitHub repository](https://github.com/ma7ot/tiny1z).

