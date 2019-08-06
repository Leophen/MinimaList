import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addItem (state, value) {
      value.time = moment(value.time).format('YYYY-MM-DD HH:mm')
      state.lists.push(value)
    },
    removeItem (state, value) {
      state.lists.splice(value, 1)
    }
  },
  actions: {

  }
})
