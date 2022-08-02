import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import MenuBase from "@/components/menus/MenuBase.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/router.js";
import { menuOptions } from "@/components/menus/menu.config.js";

let wrapper;
let router;
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  wrapper = mount(MenuBase, {
    props: {
      options: menuOptions,
    },
    global: {
      plugins: [router],
    },
  });
});
afterEach(() => {
  wrapper = null;
});
describe("MenuBase", () => {
  it("allows accessing Characters route", async () => {
    const menuOptionName = menuOptions.items[0].to.name;
    const push = vi.spyOn(router, "push");
    await wrapper
      .find(`[data-testid="menu-option-${menuOptionName}"]`)
      .trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "characters" });
  });
  it("allows accessing Locations route", async () => {
    const menuOptionName = menuOptions.items[1].to.name;
    const push = vi.spyOn(router, "push");
    await wrapper
      .find(`[data-testid="menu-option-${menuOptionName}"]`)
      .trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "locations" });
  });
  it("allows accessing Episodes route", async () => {
    const menuOptionName = menuOptions.items[2].to.name;
    const push = vi.spyOn(router, "push");
    await wrapper
      .find(`[data-testid="menu-option-${menuOptionName}"]`)
      .trigger("click");

    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "episodes" });
  });
});
