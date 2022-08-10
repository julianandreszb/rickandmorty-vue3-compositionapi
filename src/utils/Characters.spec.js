import { describe, it, expect } from "vitest";
import { getCharacters } from "@/utils/Characters";

describe("Characters", () => {
  it("can get all the characters from rick and morty api", async () => {
    const jsonData = await getCharacters();
    expect(jsonData.hasOwnProperty("info")).eq(true);
    expect(jsonData.hasOwnProperty("results")).eq(true);
  });
});
