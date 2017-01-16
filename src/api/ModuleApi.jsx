import React, {Component} from "react";
import {Layout} from 'antd';
const {Content, Sider} = Layout;

export default class ModuleApi extends Component {
    render() {
        return (
            <Layout>
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <Sider>
                                <div className="wrap-left">
                                    <h3>技术文档</h3>
                                    <ul className="menu-list">
                                        <li className="active"><a href="home.html"> 常用API接口 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                        <li><a href="home.html"> 关于统一命名文档 </a></li>
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </Sider>

                            <Content>
                                <div className="wrap-right">
                                    <div className="doc-content">
                                        <h2> 关于公共组件使用规范 </h2>
                                        <lable>
                                            <span>一、组件的分类</span>
                                            <p>
                                                Swing组件从功能上可以分成如下几类：
                                            </p>
                                            <p>
                                                ⒈顶层容器：即JFrame、JApplet、JDialog、JWindow等四个重量级组件，需要一个内容面板辅助。
                                                ⒉普通容器：使用在各种不同的情况下的中间容器，如JPanel、JScrollPane、JSplitPane、JTabbedPane等，一般可以被添加到顶层容器中。
                                                ⒊特殊容器：在GUI上起特殊作用的中间层容器，如JInternalFrame、JLayeredPane、JRootPane、JToolBar、JOptionPane等。
                                                ⒋基本控件：可以实现人机交互的组件，如JButton、JToggleButton、JRadioButton、JCheckBox、JComboBox、JList、JSlider、JScrollBar等，通常是界面上的主要角色。
                                                ⒌不可编辑信息显示：向用户显示不可编辑信息的组件，如JLabel、JProgressBar、JToolTip等，大多是起一个信息提示的作用。
                                                ⒍可编辑的格式化信息的显示：向用户显示能被编辑的格式化信息的组件，如JTable，JTree，JColorChooser和JFileChooser，用来实现用户与机器之间的信息交互工作。
                                                其他一些具有专门用途的组件。
                                            </p>

                                            <span>二、顶层框架JFrame</span>
                                            <div className="doc-table">
                                                <table>
                                                    <tr>
                                                        <th> 组件名称 </th>
                                                        <th> 文件大小 </th>
                                                        <th> 常用规则 </th>
                                                        <th> 连接操作 </th>
                                                    </tr>
                                                    <tr>
                                                        <td> web输入框组件 </td>
                                                        <td> 100M </td>
                                                        <td> 根据命名看 </td>
                                                        <td> 点开知道 </td>
                                                    </tr>
                                                    <tr>
                                                        <td> web输入框组件 </td>
                                                        <td> 100M </td>
                                                        <td> 根据命名看 </td>
                                                        <td> 点开知道 </td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <p>
                                                是一个特别常用的界面组件> 是一个特别常用的界面组件。
                                            </p>
                                            <p> 使用时需要先取得一个内容面板ContentPane>
                                                使用时需要先取得一个内容面板ContentPane，之后在内容面板上进行组件添加和布局管理。
                                                通常用一个普通容器充当，或者是初始化之后用setContentPane()方法设为内容面板，或者是通过JFrame类的成员方法getContentPane()初始化。
                                                构造方法
                                                JFrame(String title)
                                                新的JFrame对象是一个外部尺寸为0的不可见的组件，所以在程序中要用setSize()方法或pack()方法设定显示尺寸，用setVisible()方法将可见性设为真或用show()方法显示之。
                                                在JFrame对象实例中可能发生窗口事件。
                                                三、面板JPanel及普通容器
                                                JPanel是其中最有代表性、最为常用的普通容器，它只是在界面上圈定一个矩形范围而无明显标记，主要的用途是作内容面板或者为了更好地实现布局效果而作为中间容器。
                                                JPanel一般不处理事件。滚动窗口JScrollPane有专门的布局管理器ScrollPaneLayout，其外部尺寸按推荐尺寸定出，可以通过构造方法给出垂直和水平滚动条的大小，可查看大面
                                                积区域。滚动窗口内部有一个可视点JViewport的对象，作为放置组件的底板。JViewport类提供一个可见视窗，它既可以放在JScrollPane中，也可以作为独立组件使用。
                                                JViewport类有专门的布局管理器ViewportLayout。
                                                一个分隔板JSplitPane对象包含一个分隔器和两个被分隔的组件，拖动分隔器可以改变两个组件对分隔板的分隔比例。可以定义水平或者垂直分隔方向，还可以指定左右两个组件
                                                。选项板JTabbedPane是一个选项组件，由一组标签构成，每个标签代表一个组件，各个标签重叠在一起，每个标签有一个标题露出来供用户随
                                            </p>
                                        </lable>
                                    </div>
                                </div>
                            </Content>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

