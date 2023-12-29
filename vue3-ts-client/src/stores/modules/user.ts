import { defineStore } from 'pinia'

/* 个人中心的实名状态 */
export enum RealNameEnums {
  未实名,
  实名中,
  已实名未领证,
  已实名领证中,
  已实名已领证
}

export type IState = {
  realName: RealNameEnums// 实名状态
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IState => ({
    realName: RealNameEnums.未实名
  }),
  actions: {
    setRealName(value: RealNameEnums) {
      this.realName = value
    }
  }
})