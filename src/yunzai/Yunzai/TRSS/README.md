---
title: TRSS Yunzai 
icon: robot
---

## TRSS Script 提供了多端一键脚本

::: tabs

@tab:active linux

## 准备工作
### 购买服务器
[腾讯云](https://cloud.tencent.com)
>腾讯云是腾讯多年技术沉淀的云计算服务平台，提供300+款产品和全栈解决方案，覆盖大数据、计算、人工智能、容器、存储、网络、微信生态等多个领域

[阿里云](https://www.aliyun.com)
>阿里云—阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供云服务器、云数据库、云安全、云存储、企业应用及行业解决方案服务

[华为云](https://activity.huaweicloud.com)
>华为云是华为旗下的云计算服务平台，为各行业客户提供弹性云服务器、对象存储、文字识别、内容分发网络等多种云产品和解决方案

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">注意</p>
    <p>你也可以选择其他提供商的服务器，但我建议选大厂</p>
  </div>
</div>


### 服务器系统选择
<Card title="本人推荐系统">
  Ubuntu22，Debian 12
</Card>
  
## 开始安装

<div class="vp-card-container">
  <div class="hint-container tip">
    <p class="hint-container-title">提示</p>
    <p>安装中遇到看不懂的回车即可，或者联系我解决</p>
  </div>
</div>

### 换源

   ```bash
   bash <(curl -sSL https://linuxmirrors.cn/main.sh)
   ```
   
### 选择清华源
   
![](/images/TRSS/Linux/1/1.png)


### 软件源是否使用 HTTP 协议? [Y]

![](/images/TRSS/Linux/1/2.png)


### 是否跳过更新软件包? [Y]

![](/images/TRSS/Linux/1/3.png)

### 是否清理已下载的软件包缓存? [Y]

![](/images/TRSS/Linux/1/4.png)

### [完成] 安装完成

![](/images/TRSS/Linux/1/5.png)

## 安装Docker

### 脚本安装Docker

   ```bash
   bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
   ```
   
### 是否安装最新版本的 Docker Engine? [Y]

![](/images/TRSS/Linux/2/1.png)

### 请选择并输入你想使用的 Docker CE 源 [7]

![](/images/TRSS/Linux/2/2.png)

### 请选择并输入你想使用的 Docker Registry 源 [13]

![](/images/TRSS/Linux/2/3.png)

### [完成] 安装完成

![](/images/TRSS/Linux/2/4.png)

## 安装TRSS容器

### 使用脚本安装

   国内推荐

   ```bash
   DKURL=docker.fxxk.dedyn.io bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
   ```

    国外推荐

   ```bash
   bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)
   ```

   备用方法

   ```bash
   bash <(curl -L gitee.com/qianzhi11_admin/my-website/raw/master/TRSS_AllBot.sh)
   ```
    字体安装

   ```bash
   pacman -Syu --noconfirm glibc
   ```   
   

### 容器安装完成，启动命令

   ```bash
   tsab
   ```

![](/images/TRSS/Linux/3/1.png)


### 如何登录？

无



@tab Windows

## 准备工作

### 安装MYSY2

<VPBanner
  title="安装MYSY2"
  content=""
  :actions='[
    {
      text: "立即下载",
      link:"https://gitee.com/qianzhi11_admin/docs/releases/download/1.0/msys2-x86_64-20240727.exe",
    },
  ]'
/>

## 开始

### 一直点NEXT

![](/images/TRSS/Windows/1/1.png)

### 执行TRSS Script

   ```bash
   bash <(curl -L gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install.sh)
   ```

### 脚本安装完成，启动命令tsab

![](/images/TRSS/Windows/1/2.png)

## 启动命令

   ```bash
   tsab
   ```

@tab Termux

<!-- tab 3 内容 -->

:::