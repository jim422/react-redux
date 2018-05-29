#项目结构说明<br>
 #####入口文件<br>
    index.js<br>
 #####项目文件<br>
    每个文件都单独设置actions，components, containers, reducers。<br>
    项目的入口文件是todo下的AddTodoIndex(具体依据项目名字)，并在index页面中引入<br>
    reducers文件中也有index入口文件，在此文件中引入项目中所用到的reducers并export一个对象出去。在rootReducer引入index文件并解构{...index}后combine一下
    