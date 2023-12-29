import { defineStore } from 'pinia'
import { getAllMealOrPlant } from '@/api/meal'
export const mealStore = defineStore('meal', {
  state: () => ({
    meal: [],
  }),
  getters: {
    getMeal() {
      return this.meal;
    }
  },
  actions: {
    async getDate() {
      const res = await getAllMealOrPlant()

      this.meal = res.data;
      console.log(res);

    },
  }
})
