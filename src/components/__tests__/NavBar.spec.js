import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

let wrapper = null;
beforeEach(() => {
  wrapper = mount(NavBar);
});
afterEach(() => {
  wrapper = null;
});
describe("NavBar", () => {
  it("emits isMenuOpen event when toggle-menu element is clicked", () => {
    const toggleManuElement = wrapper.find('[data-testid="toggle-menu"]');
    toggleManuElement.trigger("click");
    toggleManuElement.trigger("click");

    const isMenuOpenCall = wrapper.emitted("isMenuOpen");
    expect(isMenuOpenCall).lengthOf(2);
    expect(isMenuOpenCall[0][0]).eq(true);
    expect(isMenuOpenCall[1][0]).eq(false);
  });
});
