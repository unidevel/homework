# 安装步骤
1. 安装[nodejs](http://nodejs.cn/download/)
2. 安装淘宝npm工具[cnpm](https://npm.taobao.org/)
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
3. 安装[git工具](https://git-scm.com/download/win)
4. 下载源码
```shell
git clone https://github.com/unidevel/homework.git
```
5. 安装依赖(首先在命令行中cd homework所在目录)
```shell
cd <path to homework>
cnpm install
```
6. 编译前台页面，在homework下
```shell
npm run build
```
7. 配置服务器，修改文件homework/server/config.js，可以修改如下配置（path表示相对工程的目录）
```javascript
var config = {
  tmpDir: path('tmp'),       //上传文科临时目录
  uploadDir: path('uploads') //上传文件保存目录
}
```
例如
```javascript
var config = {
  tmpDir: 'c:\\tmp',       //上传文科临时目录
  uploadDir: 'c:\\uploads' //上传文件保存目录
}
```
8. 启动http server
```shell
npm run server
```
然后打开网页，输入 `http://<machine ip>:8080/` 即可看到上传页面
