import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      interactions: [],
      interactionsLoading: false,
      activeIndex: 0,
      slideData: {
        slidesLength: 0,
        device: {},
        browser: {},
      },
      debug: {
        showDataDisplay: false,
        showPropsDisplay: false,
      },
    };
  },
  getters: {
    // answersInActivity: (x) => x.map((i) => i.answer.length > 0),
  },
  actions: {
    toggleDebug() {
      this.debug.showDataDisplay = !this.debug.showDataDisplay;
    },
    async getInteractions() {
      this.interactionsLoading = true;
      console.log("start fetch");
      const data = fetch("./source.json")
        .then((res) => res.json())
        .then((data) => (this.interactions = data.interactions));

      console.log("await fetch", this.interactions);
    },
  },
});
