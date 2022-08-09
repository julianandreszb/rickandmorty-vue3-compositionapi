import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/menus/NavBar.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/router.js";

let wrapper;
let router;
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes,
  });
  wrapper = mount(NavBar, {
    global: {
      plugins: [router],
    },
  });
});
afterEach(() => {
  wrapper = null;
});
describe("NavBar", () => {
  it("emits isMenuOpen event when toggle-menu element is clicked", () => {
    const toggleManuElement = wrapper.find('[data-testid="toggle-menu"]');
    toggleManuElement.trigger("click");
    toggleManuElement.trigger("click");

    const isMenuOpenCall = wrapper.emitted("onToggleMenu");
    expect(isMenuOpenCall).lengthOf(2);
    expect(isMenuOpenCall[0][0]).eq(true);
    expect(isMenuOpenCall[1][0]).eq(false);
  });
});
