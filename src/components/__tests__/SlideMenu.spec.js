import { describe, it, expect, afterEach, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import SlideMenu from "@/components/menus/SlideMenu.vue";
import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import { routes } from "@/router/router";

let wrapper;
let router;
beforeEach(() => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  });
  wrapper = mount(SlideMenu, {
    global: {
      plugins: [router],
      stubs: {
        MenuBase: true, // true for Default stub
      },
    },
  });
});
afterEach(() => {
  wrapper = null;
});

describe("SlideMenu", () => {
  it("shows the component based on a property", async () => {
    await wrapper.setProps({ isSlideMenuOpen: true });
    expect(wrapper.classes()).contains("open");
  });
  it("hides the component based on a property", async () => {
    await wrapper.setProps({ isSlideMenuOpen: false });
    expect(wrapper.classes()).contains("close");
  });
});
