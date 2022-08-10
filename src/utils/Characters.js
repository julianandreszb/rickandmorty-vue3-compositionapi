import { Client } from "@/utils/Client";
import { BASE_URL, CHARACTERS_ENDPOINT } from "@/utils/ApiConfig";

const getCharacters = () => {
  const client = new Client(BASE_URL);
  return client.get(CHARACTERS_ENDPOINT);
};

export { getCharacters };
