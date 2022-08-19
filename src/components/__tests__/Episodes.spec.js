import { describe, it, expect } from "vitest";
import { getEpisodes } from "@/utils/Episodes";

describe("Episodes", () => {
  it("can get all the episodes from rick and morty api", async () => {
    const jsonData = await getEpisodes();
    expect(jsonData.hasOwnProperty("info")).eq(true);
    expect(jsonData.hasOwnProperty("results")).eq(true);
  });
});
