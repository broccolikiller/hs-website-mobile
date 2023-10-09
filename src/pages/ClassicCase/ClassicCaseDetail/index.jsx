import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const ClassicCaseDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [params] = useSearchParams()
    const [id, setId] = useState(params.get('id'))
    if (id === '1') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>浙江省之江文化中心</div>
                    <div
                        className={'text-base leading-loose indent-8'}>浙江省之江文化中心，是浙江省内体量最大的现代复合文化综合体，位于杭州市西湖区之江板块，集结浙江图书馆之江馆、
                        浙江省博物馆之江馆、浙江省非物质文化遗产馆、浙江文学馆和之江文化中心公共服务中心五大文化配套设施，集自然、人文、
                        艺术、生态于一体，是浙江省践行“八八战略”打造高水平文化强省标志性成果。
                    </div>
                    <div
                        className={'text-base leading-loose indent-8'}>文化中心采用横竖科技融合互动展示系统，实现图书馆、博物馆新馆全馆信息发布、多媒体交互、泛在机器人等各类智慧化服务。
                    </div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail1.png" alt=""/>
                    </div>

                </div>
            </>
        )
    }
    if (id === '2') {
        return (
            <>
                <div>

                </div>
            </>
        )
    }
    if (id === '3') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>苏州市第二图书馆新馆</div>
                    <div className={'text-base leading-loose indent-8'}>
                        苏州第二图书馆，突出四大亮点与特色：打造国内首个大型智能化书库，打造儿童向往的“悦读天地”，打造高端信息服务新平台，打造温馨舒适的“市民书房”。
                    </div>
                    <div className={'text-base leading-loose indent-8'}>新馆全馆部署我司互动智能视窗系统、多媒体大屏互动系统、灵动创客空间研讨系统，成为图书馆智慧化平台互动展示的新窗。</div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail3.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
    if (id === '4') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>衢州文化中心</div>
                    <div className={'text-base leading-loose indent-8'}>文能化人，亦可兴城。独特而丰富的历史文化资源是衢州城市发展至关重要的一脉。衢州市文化艺术中心四馆使用面积共35597.52平方米，包含图书馆、美术馆、文化馆、非遗馆（含传习所），于2023年元旦开馆迎接衢州市民。</div>
                    <div className={'text-base leading-loose indent-8'}>横竖科技为四馆提供了智慧化整体解决方案，如数字孪生虚拟场馆与AR实景导航、融合互动展示系统、泛在拟人化服务平台、AR\VR体验系统、三馆融合数字服务平台等。其中衢州图书馆采用我司书籍视觉即时识别定位系统——慧眼系统，对馆内绝大多数流通书籍实时定位识别，成为国内首个大规模部署视觉书籍识别系统的地市图书馆。</div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail4.png" alt=""/>
                    </div>

                </div>
            </>
        )
    }
    if (id === '5') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>宁波市图书馆新馆</div>
                    <div className={'text-base leading-loose indent-8'}>宁波市图书馆新馆秉承“开放自由、智能便捷、个性特色”的建设理念，成为了宁波市公共图书馆服务体系的中心馆，宁波地区文献保障中心、公共图书馆数字资源及服务中心、地方文献数字化建设中心、纸质图书采编配送中心、公共图书馆业务培训教育中心、公共图书馆服务网络发展中心。</div>
                    <div className={'text-base leading-loose indent-8'}>新馆整馆采用我司100余套互动智能视窗系统，将新馆、城市书房、阅读书亭等一并纳入管理发布，并引入多屏联动、定制化导航等功能。新馆还部署了我司大屏互动系统，实现馆史时间轴、人物墙等各类多媒体互动功能。</div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail5.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
    if (id === '6') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>杭州市图书馆</div>
                    <div className={'text-base leading-loose indent-8'}>
                        杭州市图书馆分别在2016、17、18年连续三年采购我司互动智能视窗系统、灵动创客空间、多媒体大屏互动系统。其中互动智能视窗运行近百台，不仅用于市民中心的主馆，还分发到城区等各分馆，受主、分馆两级管理，统一部署杭图数字资源。灵动创客空间系统的部署，使得杭图实现了泛在研讨空间的功能。多媒体大屏互动系统实现了互动时间轴、互动人物墙等功能，作为杭图50周年馆庆的数字化展示窗。
                    </div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail6.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
    if (id === '7') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>浙江水利水电学院南浔新校区</div>
                    <div className={'text-base leading-loose indent-8'}>南浔校区总占地面积约1271亩（其中建筑用地面积1000亩，水域面积271亩），总建筑面积约43.3万平方米，地下建筑面积2.5万平方米，总投资25亿元；全校采用横竖科技提供的各类交互展示设备700余套、交互应用近20款，为新校区打造了一个“服务随处、智慧随行、场景随需、信息随时”的智慧校园交互服务与信息展示中枢</div>
                    <div className={'font-bold'}>案例特点：</div>
                    <div className={'text-base leading-loose indent-8'}>方案创新：全国首个集全校各类交互应用、内容、设备统一规划建设落地的高校。真正做到应用、内容灵活赋能，智慧校园“一扇窗”。</div>
                    <div className={'text-base leading-loose indent-8'}>应用灵活丰富：目前在校园各视窗上运用应用近二十款，发布模版十五款发布模版；应用内容随需发布提升学校业务管理质量：校园部门运行数据：无—有—准—精；数据一目了然、随处可见。软硬件复用：多应用赋能硬件、一屏多用、节省投资；应用、内容、设备管理平台统一复用；统一管理、学校运维成本低。</div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail7.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
    if (id === '8') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>中国科学技术大学高新校区</div>
                    <div className={'text-base leading-loose indent-8'}>中国科学技术大学高新校区图书馆是目前国内最先进的高校馆之一，本次新馆建设全馆部署了横竖科技智慧互动图书馆平台，实现了图书馆信息发布，互动业务管理，共享空间预约，无线同屏研讨系统，智能语音交互等系统的统一平台管理，既方便读者使用，更简化馆方管理，真正实现了国内领先，高效服务读者的研究型智慧图书馆。</div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail8.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
    if (id === '9') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'} >
                    <div className={'text-xl font-bold text-center py-6'}>浙江音乐学院新校区</div>
                    <div className={'text-base leading-loose indent-8'}>浙江音乐学院是教育部于2016年3月1日批准正式成立的公办全日制普通高校，校园环境优美，设施一流，占地面积602亩，拥有大剧院1座、音乐厅3座、剧场3个、排练厅102个。
                        全校于新校区落成之际，在剧院、行政楼、教学楼、图书馆、校史馆、学生活动中心等主要建筑部署我司互动智能视窗系统合计近百套，除校园日常信息发布外，将音乐学院的特色互动业务、智慧校园等部署在我司设备上。
                    </div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail9.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }
    if (id === '10') {
        return (
            <>
                <div className={'px-4 text-gray-700 pb-4'}>
                    <div className={'text-xl font-bold text-center py-6'}>上海财经大学</div>
                    <div className={'text-base leading-loose indent-8'}>上海财经大学教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学，国家首批世界一流学科
                        建设高校，国家“211工程”、“985工程优势学科创新平台”重点建设高校。采用我司互动智能视窗系统，泛在机器人，作为校园信息呈现给读者的
                        主要窗口之一，并具备了日后多馆集中管理、多数字资源呈现、多业务呈现等各类应用扩展的技术基础。
                    </div>
                    <div className={'flex justify-center mt-3'}>
                        <img src="/src/assets/classicCase/classicCaseDetail/classic-case-detail10.png" alt=""/>
                    </div>
                </div>
            </>
        )
    }

}