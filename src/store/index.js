import { createStore } from "vuex";

export default createStore({
  state: {
    sentence: "",
  },
  getters: {
    tokenizedSentence: (state) => state.sentence.split("|"),
  },
  mutations: {
    updateSentence(state, sentence) {
      state.sentence = sentence;
    },
  },
  actions: {},
  modules: {},
});
