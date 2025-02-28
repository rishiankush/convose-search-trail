# Convose Interest Search

https://github.com/user-attachments/assets/a6780880-cc6a-4a1b-b727-9576c2ab85d5

## Overview

This project implements an **interest search and autocomplete feature** for the **Convose React Native app**. Users can search for interests, and results will be displayed in **alphabetical order** and then by **popularity**. The implementation ensures smooth **UX**, preventing unnecessary reloads while filtering on the frontend.

## Features

- **Interest Autocomplete:** Fetches suggestions from the API.
- **Instant Filtering:** Filters frontend results first before making API calls.
- **Bottom-to-Top Listing:** Interests are displayed from bottom to top for better usability.
- **Debounced Search:** Reduces API calls while maintaining responsive search.
- **Primary & Secondary Search Terms:** Displays both terms as per the requirements.
- **Expo Router Support:** Uses the latest React Native architecture with Expo.

## Technologies Used

- **React Native** (Expo)
- **TypeScript**
- **Axios** for API calls
- **FlatList** for optimized rendering
- **Debounce Hook** for performance optimization

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rishiankush/convose-search-trail.git
   cd convose-interest-search
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo project:
   ```sh
   npm start
   ```

## Project Structure

```
convose-interest-search/
│── api/                 # API service layer
│   ├── interests.ts     # API calls for fetching interests
│── components/          # Reusable components
│   ├── SearchInput.tsx  # Search input component
│   ├── InterestItem.tsx # Individual interest item
│── hooks/               # Custom hooks
│   ├── useDebounce.ts   # Debounce hook for optimized searching
│── app/                 # Navigation & screens
│   ├── (tabs)/interests.tsx # Interest search screen
│── utils/               # Helper functions
│── README.md            # Project documentation
│── package.json         # Dependencies
│── tsconfig.json        # TypeScript config
```

## API Integration

The app fetches interests using the **Convose Interests Autocomplete API**.

### Example API Request:

```sh
GET https://be-v2.convose.com/autocomplete/interests?q=travel&limit=15
Headers:
  Authorization: Jy8RZCXvvc6pZQUu2QZ2
```

### Example API Response:

```json
{
  "autocomplete": [
    {
      "id": 1234,
      "name": "Traveling",
      "color": "#19AAEB",
      "avatar": "https://cdn.convose.com/travel.png",
      "existing": true
    }
  ],
  "pages_left": 10
}
```

## How It Works

1. **On App Start:** Default interest values are loaded.
2. **On Typing:** The list is first filtered on the frontend before calling the API.
3. **On Search Match:** Matches are listed in alphabetical order and then by popularity.
4. **UX Enhancements:** The list updates smoothly without flashing or unnecessary reloads.

## Contribution

- Fork the repository and create a new branch.
- Commit changes and open a pull request.
- Follow best practices for React Native and Expo development.
