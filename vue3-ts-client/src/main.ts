/*
 * @Date: 2023-12-19 14:56:07
 * @Description: 
 * @LastEditTime: 2023-12-19 15:06:20
 * @FilePath: \pc\src\main.ts
 */
import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { setUuid } from '@/utils/auth'
import { store } from '@/stores/'
import 'virtual:svg-icons-register'

//@ts-ignore
setUuid()
const app = createApp(App);
app.use(store)
app.component('svg-icon', SvgIcon)

app.use(router).mount('#app')
