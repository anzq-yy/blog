# JetBrains
## 破解方式
1. 下载破解jar包：https://gitee.com/ja-netfilter/ja-netfilter/releases
2. 下载代理包: https://3.jetbra.in/
3. 替换 config 文件夹下的内容
4. 在vm中加入
```text
   -javaagent:/absolute/path/to/ja-netfilter.jar
   --add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
   --add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
```
5 . 在下载代理包的网站复制 许可码