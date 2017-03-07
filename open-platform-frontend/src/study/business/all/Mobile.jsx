import React, {Component} from "react";
import RightMarkDown from '../../../common/RightMarkDown';


export default class Mobile extends Component {
    render() {
        return (
            <RightMarkDown source={['## 移动医疗事业部',
                '***',
                '### 业务介绍',
                '针对护士的移动办公，提出护理临床解决方案、护士站公告解决方案、移动门诊输液解决方案；' +
                '针对护士的管理，提出护理管理解决方案；针对医生的移动办公提出掌上医生APP解决方案和移动医生查房解决方案。',
                '\n 护理临床解决方案包括移动护士工作站和护理文书系统两个部分。',
                '* **移动护士工作站** 利用专业PDA和条码扫描技术，将信息接入点移动至患者床旁，高效完成医嘱执行、体征采集、护理评估等作业。' +
                '强大的“在线+离线”双重模式，便于灵活应对复杂的网络环境；独创的“大屏+小屏”终端配置，便于适用多样化使用场景；' +
                '全程跟踪医嘱执行，有效闭合医嘱周期。智能提醒功能可以根据病人需要对护士进行及时提醒。',
                '* **护理文书系统** 利用临床护理所采集到的多方数据，即可自动生成各类护理文书。' +
                '真正意义上实现了数据的一次采集，多处使用。京颐积累了十几年表单制作经验，支持丰富且规范的护理文书模板，并能满足客户的个性化定制需求。',

                '***',
                '### 案例介绍',
                '复旦大学附属华山医院是卫生部部属，中国红十字会唯一直属的三甲医院，14年门诊量超过384万人次。' +
                '利用护理临床解决方案，实现了床旁护理的信息化。系统根据HIS以及临床收集到的患者信息，智能计算出体征测量任务和实施时间，对护士进行智能提醒。',
                '**护士站公告解决方案**京颐对医院病区白板内容和功能进行充分调研，开发了以液晶电视作为信息发布窗口的护士站公告解决方案。' +
                '系统可以动态显示病区概况、护士值班及各类公告，实时推送手术、转科、出院信息。通过从HIS同步信息，减少由于手工转抄、公布等操作造成的差错，增强时效。',

                '***',
                '### 案例介绍',
                '上海交通大学医学院附属新华医院是一所现代化综合性三甲医院。' +
                '通过在病区走廊安装大屏显示器，自动实时更新病区信息，减少了护士人员手动的工作量，同时也提高了数据的准确性，满足了各方面人员的使用需求。',
                '**移动门（急）诊输液解决方案**医院输液科室业务繁忙、琐碎且重复性强，而且面临一些安全隐患。京颐通过专业PDA，识别药物和病人的标签条码，实现智能双重核对，确保病人输液安全；' +
                '使用RFID射频识别技术实现无线呼叫和PDA的信息传递；此外，支持病人多地输液（多天的输液可以在不同地点完成），提升了输液的灵活性。',

                '***',
                '### 案例介绍',
                '十堰市太和医院是一家大型国家综合性三甲医院，上线京颐移动门诊输液方案后，简化了输液流程，减少了医疗差错，提高了护士的工作效率。' +
                '护理管理解决方案包括护理质量管理系统和护理绩效管理系统。',
                '* **护理质量管理系统**以科室为单元精细跟踪护理质量，通过对满意程度、不良事件等进行全面核实、评估、分析、总结，帮助医院持续改进护理质量，更好的服务于病人。' +
                '系统运用了PDCA（Plan Do Check Action）的循环模型帮助改进护理质量；内置丰富的临床护理监测指标；并能利用iPad等手持终端对护理质量进行查询和记录。',
                '* **护理绩效管理系统**通过将从各个系统收集到的客观数据与主观评价结合，建立起科学有效的绩效评价体系。' +
                '具体而言，就是通过对多方数据进行整合和自动化统计，从护理工作量、护理质量、满意度和工作要求四个维度对绩效进行科学考核，通过数据的量化来计算奖金分配，极大提高了护士的积极性。',

                '***',
                '### 案例介绍',
                '华中科技大学同济医学院附属同济医院是一所现代化综合性三级甲等医院，从2011年起开始启用京颐移动临床信息系统和护理质量管理系统，目前已经覆盖了全院135个科室。',
                '**护士站公告解决方案**' +
                '帮助医生能够在移动终端查看病人各项信息（基本、病例、费用），通过手写、语音、图片等多种形式对病情进行备注，实时完成查房录入和医嘱下达，使患者得到及时治疗。',

                '***',
                '### 案例介绍',
                '浙江大学医学院附属第二医院是一所综合性三甲医院，使用京颐的移动查房解决方案，能够在手持终端直接获取HIS系统的病人信息，及时完成医嘱下达，极大的提高了查房效率。',
                '**掌上医生APP**利用医生自带的智能手机，将原本只能在PC端处理的功能移动到手机端。' +
                '使医生可获取来自医院系统的各项通知，如病人的危急值、手术会诊通知，随时随地掌握患者资料，如心电信息、电子病历、体温单等，还能移动处理一些日常工作，如跟进药物审核流程。' +
                '这些都极大的提高了医生的工作效率，使得医生办公不再被束缚在工作站。 ',

                '***',
                '### 案例介绍',
                '曲靖市第一人民医院，利用VPN接入互联网，医生通过手机即可访问医院HIS系统，访问医院资源。',

                '***',
                '### 发展方向',
                '作为市场份额最高的移动医疗产品和服务的供应商，京颐采用完整的解决方案，先进的软硬技术、丰富的行业经验，' +
                '助力更多具影响力的医疗机构通过使用京颐移动医疗类产品，提升医疗服务效率。',
            ]}/>
        )
    }
}
