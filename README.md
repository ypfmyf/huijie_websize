# Ubuntu 环境发布说明

## 安装 NPM

* 安装 `nvm`
* 安装 `node` 和 `npm`
* 安装 `nrm`
* 切换到 `taobao` 源

```bash
apt-get update
apt-get install build-essential libssl-dev
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh

chmod +x install_nvm.sh
./install_nvm.sh
source ~/.profile

nvm install —lts

npm install -g nrm

nrm use taobao
```


## 打包

执行打包命令：

```bash
npm install
npm install react-ga --save

npm run probuild
```

如果 `npm install` 失败，根据提示执行以下命令：

```bash
npm audit fix
npm audit fix --force
```


## Nginx 配置

打包后的 html js image 保存在 `build` 目录下。

```nginx
server {
    listen 80;
    server_name gegee.cc www.gegee.cc geji.tech www.geji.tech www.24bpm.com www.24bpm.cn www.24bpm.top;

    root /opt/geji/website-2019/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```