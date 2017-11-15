# comm-vue

> A Vue.js project

## Build Setup

``` bash
# vue + axios + sass + element-ui
# 安装 vue-cli
npm install -g vue-cli
# 新建项目 进入项目
cd my-project 
# vue 初始化
vue init webpack project-name
#进入 project-name
cd project-name
# install dependencies
npm install
# 安装 element-ui
npm install element-ui --save-dev

#main.js 引入
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'

#安装 axios
npm install axios --save-dev
#main.js 引入
import axios from 'axios'
Vue.prototype.$http = axios

#安装 sass
npm install node-sass --save-dev
npm install sass-loader --save-dev
# build conf.js 
{
    test: /\.sass$/,
    loader: ['style', 'css', 'sass']
}
# 页面 <style lang="scss"></style>

# router 修改 router/index.js new Router()添加  mode history H5路径  不加默认/#/结尾
  mode: 'history', 

# 安装vuex 
npm install vuex --save-dev

src文件夹新建vuex文件夹 在vuex文件夹下新建 store.js
main.js引入
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

# serve with hot reload at localhost:8080 
npm run dev

# build for production with minification  打包到 dist
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
