import axios from "axios";

const API_BASE_URL = "/api"; // set your base URL here

const api = axios.create({
  baseURL: API_BASE_URL,
});

export async function getArticles() {
  try {
    const response = await api.get("/articles");
    return response.data.articles;
  } catch (error) {
    throw {
      message: "Failed to fetch articles",
      statusText: error.response.statusText,
      status: error.response.status,
    };
  }
}
