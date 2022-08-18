import { Client } from "@/utils/Client";
import { BASE_URL, CHARACTERS_ENDPOINT } from "@/utils/ApiConfig";

const getCharacters = (page = 1) => {
  const client = new Client(BASE_URL);
  return client.get(`${CHARACTERS_ENDPOINT}?page=${page}`);
};

export { getCharacters };
