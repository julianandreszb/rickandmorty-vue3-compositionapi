import { Client } from "@/utils/Client";
import { BASE_URL, CHARACTERS_LOCATION } from "@/utils/ApiConfig";

const getLocations = (page = 1) => {
  const client = new Client(BASE_URL);
  return client.get(`${CHARACTERS_LOCATION}?page=${page}`);
};

export { getLocations };
