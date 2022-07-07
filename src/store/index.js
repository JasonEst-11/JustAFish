import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bob:{
      top: 0,
      left: 0,
      size: 50,
      speed: 0.5,
      flip: false,
    },
  },
  getters: {
  },
  mutations: {
    feed(state){
      state.bob.size += 10
    },
    diet(state){
      state.bob.size = 50
    },
    move(state){
      let timing = Math.floor(Math.random() * (3000 - 2000)) + 2000;
      setInterval(() => {
        let newY = Math.floor(Math.random() * (80 - 20)) + 20;
        let newX = Math.floor(Math.random() * (80 - 20)) + 20;

        let newSpeed = Math.random() * (1 - 0) + 0;
        let diff = state.bob.left - newX;
        if (diff > 0) {
          state.bob.flip = true;
        } else if (diff < 0) {
          state.bob.flip = false;
        }
        state.bob.top = newY;
        state.bob.left = newX;
        state.bob.speed = newSpeed;
      }, timing);
    }
  },
  actions: {
  },
  modules: {
  }
})
