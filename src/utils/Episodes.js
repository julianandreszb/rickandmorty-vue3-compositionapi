import { Client } from "@/utils/Client";
import { BASE_URL, EPISODES_ENDPOINT } from "@/utils/ApiConfig";

const getEpisodes = (page = 1) => {
  const client = new Client(BASE_URL);
  return client.get(`${EPISODES_ENDPOINT}?page=${page}`);
};

export { getEpisodes };
