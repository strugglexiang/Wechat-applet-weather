# 前言
小程序有以下限制：
1. 不能随意使用网络资源，如`css`、`字体`等，如要使用，该资源的获取需要有`https`协议。
2. 不能引用内部字体文件。
3. `wxss`中不能使用`background-positon`定位内部背景图片。

# icon组件
在小程序中使用字体图标并封装成组件。

# 步骤
[1]:https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a
[2]:https://icomoon.io/app/#/select
[3]:https://transfonter.org/

1. 选择好字体图标并下载下来
下面是两个图标库：    
[iconfont][1]    
[icomoon][2]


2. 将`css`文件内容复制进组件`wxss`文件
```
@font-face {
    font-family: "iconfont";
    ...
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconbaoyu:before {
  content: "\e66a";
}

```
这个时候`@font-face`引入的是字体文件


3. 在线网站将`ttf`字体文件转为base64格式   
打开[该网站][3]，上传上述字体文件包中的`.ttf`为base格式并下载解压


4. 复制转换文件的css字体引入部分    
```
@font-face {
    font-family: 'iconfont';
    src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAnYAA0AAAAAHswAA...) format('woff');
    font-weight: normal;
    font-style: normal;
}
```

5. 替换`wxss`的`@font-face`引入


6. 用类名使用图标
如：
```
<text class="iconfont iconyin"></text>
```
