import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CharacterCard from "@/components/CharacterCard.vue";

const wrapper = mount(CharacterCard, {
  props: {
    character: {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
    },
  },
});

describe("CharacterCard", () => {
  it("It must render the name of the character", () => {
    expect(wrapper.find('[data-testid="name"]').text()).eq("Rick Sanchez");
  });
  it("It must render the status of the character", () => {
    expect(wrapper.find('[data-testid="status"]').text()).eq("Alive");
  });
  it("It must render the species of the character", () => {
    expect(wrapper.find('[data-testid="species"]').text()).eq("Human");
  });
  it("It must render the last known location of the character", () => {
    expect(wrapper.find('[data-testid="location-name"]').text()).eq(
      "Citadel of Ricks"
    );
  });
  it("It must render the first seen location in of the character", () => {
    expect(wrapper.find('[data-testid="origin-name"]').text()).eq(
      "Earth (C-137)"
    );
  });
});
