import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Paginator from "@/components/Paginator.vue";

window.scrollTo = vi.fn(); // Disable Error: Not implemented: window.scrollTo

describe("Paginator", () => {
  it("should not render the Prev button on the first page", () => {
    const wrapper = mount(Paginator, {
      props: {
        startPage: 1,
        pages: 42,
      },
    });
    expect(wrapper.find('[data-testid="prev-button"]').classes()).contains(
      "invisible"
    );
  });

  it("should render the Prev button when the page is greater than or equal to two", () => {
    const wrapper = mount(Paginator, {
      props: {
        startPage: 2,
        pages: 42,
      },
    });
    expect(wrapper.find('[data-testid="prev-button"]').isVisible()).eq(true);
  });

  it("should not render the Next button on the last page", () => {
    const wrapper = mount(Paginator, {
      props: {
        startPage: 42,
        pages: 42,
      },
    });
    expect(wrapper.find('[data-testid="next-button"]').classes()).contains(
      "invisible"
    );
  });

  it("should render the Next button when the page is smaller than the last page", () => {
    const wrapper = mount(Paginator, {
      props: {
        startPage: 41,
        pages: 42,
      },
    });
    expect(wrapper.find('[data-testid="next-button"]').isVisible()).eq(true);
  });

  it("should emit an event when Prev button is clicked", async () => {
    const startPage = 3;
    const wrapper = mount(Paginator, {
      props: {
        startPage,
        pages: 42,
      },
    });
    await wrapper.find('[data-testid="prev-button"]').trigger("click");
    const onPrevButtonClickCall = wrapper.emitted("onPrevButtonClick");

    expect(onPrevButtonClickCall).lengthOf(1); // Clicked one time
    expect(onPrevButtonClickCall[0][0]).toMatchObject(startPage - 1); // Current page - 1
  });

  it("should emit an event when Next button is clicked", async () => {
    const startPage = 2;
    const wrapper = mount(Paginator, {
      props: {
        startPage,
        pages: 42,
      },
    });
    await wrapper.find('[data-testid="next-button"]').trigger("click");
    const onNextButtonClickCall = wrapper.emitted("onNextButtonClick");

    expect(onNextButtonClickCall).lengthOf(1); // Clicked one time
    expect(onNextButtonClickCall[0][0]).toMatchObject(startPage + 1); // Current page + 1
  });

  it("should show the initial page based on startPage property", () => {
    const wrapper = mount(Paginator, {
      props: {
        startPage: 30,
        pages: 42,
      },
    });
    expect(wrapper.find('[data-testid="current-page"]').text()).eq("30");
  });

  it("should open a page selector dialog when currentPage element is clicked", () => {
    const wrapper = mount(Paginator, {
      props: {
        startPage: 30,
        pages: 42,
      },
    });
    wrapper.find('[data-testid="current-page"]').trigger("click");
    expect(wrapper.find('[data-testid="page-selector"]').isVisible()).eq(true);
  });

  // it("should show the current page selected by default on the page selector dialog", () => {
  //   expect(false).eq(true);
  // });

  // it("should show all available pages on the page selector dialog", () => {
  //   expect(false).eq(true);
  // });

  // it("should emit an event when a page different to the current page is clicked", () => {
  //   expect(false).eq(true);
  // });
});
