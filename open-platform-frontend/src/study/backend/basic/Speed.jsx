import React, {Component} from "react";
import RightMarkDown from '../../../common/RightMarkDown';


export default class Speed extends Component {
    render() {
        return (
            <RightMarkDown source={['### 如何提高编程速度',
                '***',
                '#### 硬件配置+软件优化',
                '不少程序员都没有意识到一台配置合理的电脑对于程序员的日常工作有多重要。' +
                '由于程序员编程时需要频繁的编译，运行，频繁的输入代码，从内存，硬盘中读写文件，' +
                '如果硬件时常由于性能瓶颈出现卡顿，一天可能将造成1个小时左右的时间浪费，将会对程序员的工作造成很大的影响。',
                '合理的配置不会花费你过多的金钱，比如编程对于显卡没有什么要求，会节省很多花费。\n',
                '建议需要注意的配置如下：',
                '*  **硬盘** 购买SSD硬盘，其中，PCIe的SSD性能又好过SATA的SSD。（出于成本考虑，一般SATA的SSD是标配）',
                '*  **内存** 请购买DDR4 至少8G的内存。（可以买4G配置，然后自己加）',
                '*  **CPU** 请至少买intel I5，最好是intel I7',
                '*  **键盘** 合适的键盘往往能提高输入代码的速度，推荐使用机械键盘，至于MX轴选用茶青红黑中的哪种，看个人喜好而定。',
                '*  **其他** 大屏显示器，好的无线网卡等',
                '\n软件优化一个是选择操作系统，如果对linux操作系统熟悉推荐使用，如果使用windows，请不要安装杀毒软件，开机启动项里请关闭不需要的程序。',

                '***',
                '#### IDE和工具',
                'IDE推荐使用idea（前端storm），请一定重视对IDE的设置，快捷键，插件的学习和掌握。',
                '熟练使用IDE快捷键可以将编程速度提高一倍，完全相同的代码。新手可能需要8小时，而熟练的程序员4个小时即可完成。',
                'idea常用快捷键：',
                '*  **双击shift** 在项目的所有目录查找',
                '*  **ctrl+f** 当前文件查找特定内容',
                '*  **ctrl+shift+f** 当前项目查找包含特定内容的文件',
                '*  **ctrl+n** 查找类',
                '*  **ctrl+shift+n** 查找文件',
                '*  **ctrl+e** 最近的文件',
                '*  **alt+F7** 函数或者变量或者类的所有引用到的地方',
                '*  **shift+enter** 另起一行',
                '*  **ctrl+r** 当前文件替换特定内容',
                '*  **ctrl+shift+r** 当前项目替换特定内容',
                '*  **shift+F6** 重命名你的类、方法、变量等等',
                '*  **ctrl+d** 复制当前行到下一行',
                '*  **ctrl+x** 剪切当前行',
                '*  **ctrl+z** 撤销',
                '*  **alt+insert** 自动生成代码，如constructor, getter,setter等',
                '*  **alt+enter** 自动推荐错误提示的解决方案',
                '*  **ctrl+alt+l** 自动格式化',
                '\n工具：',
                '*  **浏览器开发者工具** n浏览器自带，从此前端轻轻松松debug。',
                '*  **脚本语言** 推荐python，很多如excel统计的日常重复工作都可以用脚本自动处理。',
                '*  **markdown** 程序员写文档都对格式很头疼，本网站的文档格式都是通过markdown生成的，简单实用。',
                '*  **在线画图工具** [processOn](https://www.processon.com/)。',

                '***',
                '#### 第三方组件和JAVA8',
                '很多功能都不需要自己浪费时间重复造轮子，使用第三方组件即简单又质量高。',
                '*  **Lombok** java工具，通过注解自动生成constructor, getter,setter等。',
                '*  **apache commons/guava** apache和google的优秀util包。',
                '*  **spring aop** 将重复的处理代码在切面处只出现一次。',
                '*  **spring社区** spring-boot,spring-data,spring-cache等各种常用工具应有尽有。',
                '*  **github** star很多的组件一般都可以放心使用。',
                '*  **java8** [Java8入门](/#/java8/interface-default)。',

                '***',
                '#### 编码结构和设计模式',
                '优秀的编码习惯，编码结构。合理的使用设计模式，都能极大的提高编程效率：',
                '*  **代码质量** ',
                '*  **深入理解业务** ',
                '*  **实现方案** ',
                '*  **spring社区** ',
                '*  **设计模式** ',
                '\n多思考，少代码。',

            ]}/>
        )
    }
}
