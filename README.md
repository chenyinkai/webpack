# webpack

## simple usage

> [https://github.com/chenyinkai/webpack/tree/master/usage](simpleusage)

## resolve

* 解析相对路径
    1.查找相对当前模块的路径下是否有对应文件或文件夹
    2.是文件则直接加载
    3.是文件夹则继续查找文件夹下的 `package.json` 文件
    4.有 `package.json` 文件则按照文件中 `main` 字段的文件名来查找文件
    5.无 `package.json` 或者无 main 字段则查找 `index.js` 文件
* 解析模块名
    查找当前文件目录下，父级目录及以上目录下的 node_modules 文件夹，看是否有对应名称的模块
