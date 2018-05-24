#项目结构说明
 #####入口文件
    index.js
 #####项目文件
    每个文件都单独设置actions，components, containers, reducers。
    项目的入口文件是todo下的AddTodoIndex(具体依据项目名字)，并在index页面中引入
    reducers文件中也有index入口文件，在此文件中引入项目中所用到的reducers并export一个对象出去。在rootReducer引入index文件并解构{...index}后combine一下
    