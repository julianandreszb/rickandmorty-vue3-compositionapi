import { describe, it, expect } from "vitest";
import { getLocations } from "@/utils/Locations";

describe("Locations", () => {
  it("can get all the locations from rick and morty api", async () => {
    const jsonData = await getLocations();
    expect(jsonData.hasOwnProperty("info")).eq(true);
    expect(jsonData.hasOwnProperty("results")).eq(true);
  });
});
