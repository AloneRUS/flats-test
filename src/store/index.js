import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flats: {},
    cities: {}
  },
  getters: {
    FLATS: state => {
      return state.flats;
    },
    CITIES: state => city => {
      return state?.cities[city] ? state.cities[city] : city;
    }
  },
  mutations: {
    SET_FLATS: (state, flats) => {
      state.flats = flats;
    },
    SET_CITIES: (state, cities) => {
      state.cities = cities;
    },
    CHANGE_LIKES: (state, flatId) => {
      const flatNum = state.flats.findIndex(f => f.id === flatId);
      state.flats[flatNum].attributes.likes =
        state.flats[flatNum].attributes.likes || 0;
      if (state.flats[flatNum].attributes.liked) {
        state.flats[flatNum].attributes.liked = false;
        state.flats[flatNum].attributes.likes--;
      } else {
        state.flats[flatNum].attributes.liked = true;
        state.flats[flatNum].attributes.likes++;
      }
    }
  },
  actions: {
    GET_FLATS: async context => {
      const { data } = await Axios.get("/entities.json");
      context.commit("SET_FLATS", data.response);
    },
    GET_CITIES: async context => {
      const { data } = await Axios.get("/cities.json");
      context.commit("SET_CITIES", data.cities);
    },
    PUT_LIKE: async (context, flatId) => {
      const { data } = await Axios.get("/like.json"); // Axios.post("/like.json", { flatId });
      if (!data.success) {
        throw new Error("Server error");
      }
      context.commit("CHANGE_LIKES", flatId);
    }
  },
  modules: {}
});
