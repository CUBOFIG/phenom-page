import create from "zustand";

export const globalStore = create((set) => ({
  test: false,
  statusLive: false,
  data: {},
  isOpenSidebar: false,
  oLoading: true,
  onSidebarToggle: (e) => {
    set({ isOpenSidebar: e });
  },
  setData: (data) => {
    if (data.status === "onlive") set({ statusLive: true });
    set({ data, oLoading: false });
  },
  fetch: async () => {
    const response = await fetch("https://deno-phenom.deno.dev/");
    const json = await response.json();

    set({ data: json, oLoading: false });
  },
}));
