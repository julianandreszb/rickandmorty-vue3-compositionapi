import { Client } from "@/utils/Client";
import { BASE_URL, LOCATIONS_ENDPOINT } from "@/utils/ApiConfig";

const getLocations = (page = 1) => {
  const client = new Client(BASE_URL);
  return client.get(`${LOCATIONS_ENDPOINT}?page=${page}`);
};

export { getLocations };
