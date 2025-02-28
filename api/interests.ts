import axios from "axios";

const API_BASE_URL = "https://be-v2.convose.com";
const AUTH_TOKEN = "Jy8RZCXvvc6pZQUu2QZ2";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: AUTH_TOKEN,
  },
});

export const fetchInterests = async (
  query: string,
  limit: number = 12,
  from: number = 0
) => {
  try {
    const response = await api.get("/autocomplete/interests", {
      params: { q: query, limit, from },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching interests:", error);
    return { autocomplete: [], pages_left: 0 };
  }
};
