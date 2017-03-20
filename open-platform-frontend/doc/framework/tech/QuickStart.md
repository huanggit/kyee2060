快速搭建
===

### 公司maven私服
* windows在 *C:\\用户\\xxx\\.m2\\settings.xml* 文件里
* linux在 *~/.m2/settings.xml* 文件里
```xml
<mirrors>
\t<mirror>
\t\t<id>nexus</id>
\t\t<mirrorOf>*</mirrorOf>
\t\t<url>http://nexus.kyeegroup.com/content/groups/public/</url>
\t</mirror>
</mirrors>
```