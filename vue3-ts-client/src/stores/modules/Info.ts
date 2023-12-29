import { defineStore } from 'pinia'

export const useInfoStore = defineStore('counter', {
  state: () => ({
    userinfo: {
      token: ''
    }
  }),
  getters: {},
  actions: {}
})
