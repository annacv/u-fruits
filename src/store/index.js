import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { randomFruit, parseFruit, getFruitObject, localFruits } from '@/helpers/fruitsHelper'
import fruit from 'fruit-api/api/fruit/index.js'

Vue.use(Vuex)

const state = {
  dataUrl: 'http://localhost:3000/fruit/',
  disabled: false,
  fruit: {
    name: '',
    id: '',
    image: '',
    price: '',
    color: '',
    description: '',
    taste: '',
    expires: ''
  },
  fruitCount: '',
  fruits: [],
  fruitDeleted: '',
  localFruits: localFruits,
  localFruitsAdded: []
}

const getters = {
  allFruits: (state) => state.fruits,
  fruit: (state) => state.fruit,
  fruitCount: (state) => state.fruitCount
}

const actions = {
  async getFruitCount({ commit }) {
    await axios.get(this.state.dataUrl)
    .then(response => {
      commit('SETCOUNT', response.data.data.fruitCount)
      })
    .catch((e) => {
      console.error(e)
    })
  },

  async getFruits({ commit }) {
    await axios.get(this.state.dataUrl)
      .then(response => {
        const jsonData = response.data
        const parsed = parseFruit(jsonData)
        let dataFruits = []
  
        for (let obj in parsed) {
          obj = parsed[obj]
          getFruitObject(obj, dataFruits)
        }
        commit('SETFRUITS', dataFruits)
      })
      .catch(() => {
        let localdata = []
        for (let item in fruit.fruit) {
          item = fruit.fruit[item]
          if (item.isFruit) localdata.push(item)
        }
        console.log('displaying fruits from local', localdata)
        commit('SETFRUITS', localdata)
      })
  },

  async setNewFruit({ commit }) {
    await commit('SETRANDOMFRUIT')
    axios.post(this.state.dataUrl, this.state.fruit)
      .catch((e) => {
        if (state.fruits.length === 16) {
          console.log('No more random fruits to show.')
          commit('SETDISABLED')
        } else {
          console.log('Something went wrong, please try again')
          console.error(e)
        }
      })
  },

  async deleteFruit({ commit }, fruitId) {
    await commit('SETDELETEDFRUIT', fruitId)
    axios.delete(this.state.dataUrl + this.state.fruitDeleted)
  },

  async getCurrentFruit({ commit }, fruitData) {
    await commit('SETCURRENTFRUIT', fruitData)
    axios.get(this.state.dataUrl + this.state.fruit.id)
  }
}

const mutations = {
  SETFRUITS (state, fruits) {
    state.fruits = fruits
  },

  SETCOUNT (state, count) {
    state.fruitCount = count
  },

  SETDELETEDFRUIT (state, fruitId) {
    state.fruitDeleted = fruitId
    state.disabled = false
  },

  async SETRANDOMFRUIT (state) {
    const excludedIds = state.localFruitsAdded
    const randomId = randomFruit(16, excludedIds)
    const fruitData = state.localFruits.find(x => x.id === randomId)
    const values = Object.keys(fruitData)
    values.forEach((key, n) => {
      state.fruit[values[n]] = fruitData[key]
    })
  },

  SETCURRENTFRUIT (state, fruitData) {
    const values = Object.keys(fruitData)
    values.forEach((key, n) => {
      state.fruit[values[n]] = fruitData[key]
    })
  },

  SETDISABLED (state) {
    state.disabled = true
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
