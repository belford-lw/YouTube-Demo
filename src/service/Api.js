import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: "100",
  },
  headers: {
    'x-rapidapi-key': '74e790d694mshcc2e348c6ff4358p1e6149jsn2150d7604236',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const Api = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};