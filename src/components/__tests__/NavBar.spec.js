import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/router.js";

let wrapper;
let router;
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes,
  });
  await router.push("/");
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

    const isMenuOpenCall = wrapper.emitted("isMenuOpen");
    expect(isMenuOpenCall).lengthOf(2);
    expect(isMenuOpenCall[0][0]).eq(true);
    expect(isMenuOpenCall[1][0]).eq(false);
  });
  it("allows accessing Home route", async () => {
    const push = vi.spyOn(router, "push");
    await wrapper.find('[data-testid="menu-option-home"]').trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "home" });
  });
  it("allows accessing Characters route", async () => {
    const push = vi.spyOn(router, "push");
    await wrapper
      .find('[data-testid="large-menu-option-characters"]')
      .trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "characters" });
  });
  it("allows accessing Locations route", async () => {
    const push = vi.spyOn(router, "push");
    await wrapper
      .find('[data-testid="large-menu-option-locations"]')
      .trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "locations" });
  });
  it("allows accessing Episodes route", async () => {
    const push = vi.spyOn(router, "push");
    await wrapper
      .find('[data-testid="large-menu-option-episodes"]')
      .trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "episodes" });
  });
});
