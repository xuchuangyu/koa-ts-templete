import { createLogger, defineConfig, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//@ts-ignore
import vitePluginLvdeploy from 'vite-plugin-lvdeploy'
import legacy from "@vitejs/plugin-legacy";
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path'
/************************************* 路径配置 start ********************************/
import { resolve } from 'path'



const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir)
}



/************************************* 路径配置 end ********************************/
// https://vitejs.dev/config/
export default (async (mode) => {
  const env = loadEnv(mode.mode, __dirname)

  return defineConfig({
    build: {
      outDir: env.VITE_outputDir,

    },
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
          })
        ],
      }),

      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹(路径为存放所有svg图标的文件夹不单个svg图标)
        iconDirs: [path.resolve(process.cwd(), 'src/icons/')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      //@ts-ignore
      vitePluginLvdeploy({
        'test': {
          host: '47.119.118.7',//服务器IP
          port: 22,//服务器端口te
          username: 'root',//服务器ssh登录用户名
          password: '*************',//服务器ssh登录密码
          serverpath: '/data/xcy/code/sourceOfGreen/dist'
        },
        'build': {
          host: '111.230.195.153',//服务器IP
          port: 22,//服务器端口te
          username: 'root',//服务器ssh登录用户名
          password: 'Gdk805504900',//服务器ssh登录密码
          serverpath: '/data/xcy/code/sourceOfGreen/distPro'
        }
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element-theme.scss" as *;`,
        },
      },
    },
    resolve: {  // ****************** 路径配置新增
      alias: {
        "@": path.resolve(__dirname, "src")
      }     // ****************** 路径配置新增
    },
    server: {
      host: '0.0.0.0',//设置地址：http://localhost
      // port: 4500, // 设置服务启动端口号
      // open: true, // 设置服务启动时是否自动打开浏览器
      // cors: true, // 允许跨域
      proxy: {
        [env.VITE_PROXY_DOMAIN]: {
          target: env.VITE_PROXY_DOMAIN_REAL,//代理的地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')//这里的/需要转义
        }
      }
    },

  })

})
