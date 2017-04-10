快速搭建
===

## 公司maven私服
* windows在 *C:\\用户\\xxx\\.m2\\settings.xml* 文件里
* linux在 *~/.m2/settings.xml* 文件里
```xml
<mirrors>
  <mirror>
    <id>nexus</id>
    <mirrorOf>*</mirrorOf>
    <url>http://nexus.kyeegroup.com/content/groups/public/</url>
  </mirror>
</mirrors>
```