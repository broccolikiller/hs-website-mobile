import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import item3 from '../../assets/solution/library3.png'
import campus3 from '../../assets/solution/campus3.png'
import campus4 from '../../assets/solution/campus4.png'

export const Solution = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [id, setId] = useState(1)
    useEffect(() => {
        setId(() => Number(searchParams.get('id')))
    }, [searchParams])
    return (
        <>
            <div className={'px-4 text-gray-700'}>
                {
                    id === 1 &&
                    <div>
                        <h1 className={'text-xl font-bold text-center py-6'}>智慧互动图书馆整体解决方案</h1>
                        <div
                            className={'text-base leading-loose indent-8'}>横竖科技智慧互动图书馆方案由图书馆融合互动展示系统、AI视觉书籍定位盘点系统、虚拟图书馆、拟人化服务平台、图书馆综合空间预约系统等子系统组成。围绕图书馆核心业务，以一体化理念为基础、AI人工智能技术赋能为特点，大幅提升图书馆读者智慧化服务体验与图书馆管理运维效率。
                        </div>
                        <img src={item3} alt=""/>
                        <div className={'pb-8'}>
                            <div className={'border-b border-dashed border-slate-400 leading-loose py-6'}>
                                <div className={'font-bold'}>慧眼书籍即时定位盘点系统：</div>
                                <div
                                    className={'indent-8'}>国内首创采用机器视觉技术实现对书籍的图像识别与定位，一举解决困扰图书馆多年的书籍乱架、读者找书难的问题。
                                </div>
                            </div>
                            <div className={'border-b border-dashed border-slate-400 leading-loose py-6'}>
                                <div className={'font-bold'}>融合互动展示系统：</div>
                                <div className={'indent-8'}>智慧图书馆“一扇窗”，对图书馆的各类交互展示设备、应用、内容进行一体化统一管理，实现灵活应用与场景赋能、多媒体交互呈现。
                                </div>
                            </div>
                            <div className={'border-b border-dashed border-slate-400 leading-loose py-6'}>
                                <div className={'font-bold'}>读者拟人化服务平台：</div>
                                <div className={'indent-8'}>以“泛在机器人”为核心理念，统一图书馆实体机器人与各视窗泛在机器人，实现全馆无处不在的读者智能需求识别与智能服务。
                                </div>
                            </div>
                            <div className={'border-b border-dashed border-slate-400 leading-loose py-6'}>
                                <div className={'font-bold'}>数据孪生虚拟图书馆：</div>
                                <div
                                    className={'indent-8'}>采用可视化数字建模技术，对图书馆空间、家具、书架、流通书籍进行实时可视化复现，结合定位技术，实现AR可视化导航等各类应用。

                                </div>
                            </div>
                            <div className={'border-b border-dashed border-slate-400 leading-loose py-6'}>
                                <div className={'font-bold'}>图书馆综合空间管理系统：</div>
                                <div
                                    className={'indent-8'}>图书馆空间、座位、研讨室、影音室等各类空间资源的一体化预约管理与门禁签到等功能，结合无线同屏研讨矩阵，实现内外一体的图书馆空间管理系统。

                                </div>
                            </div>
                        </div>
                    </div>


                }
                {
                    id === 2 && <div>
                        <div>
                            <h1 className={'text-xl font-bold text-center py-6'}>智慧互动图书馆整体解决方案</h1>
                            <div className={'text-base leading-loose indent-8'}>
                                智慧校园“一扇窗”：突破性地将智慧校园各类交互展示设备、应用、内容以“一体化”理念统筹设计建设，充分考虑校园建设未来功能扩展性，实现资源复用节约投资、应用与场景灵活赋能、数据与内容发布、设备统一运维、分部门使用权限管理；从而打破设备与应用绑定，一个应用一堆设备一套后台的信息孤岛局面，最终打造“服务随处、智慧随行、场景随需、信息随时”的智慧校园交互服务与信息展示中枢。
                            </div>
                            <div className={'text-base leading-loose indent-8'}>
                                方案包含各类交互展示设备与系统、含全校综合资源预约系统、校园深度感知系统、AI拟人化服务平台、融合互动展示系统、校园新闻聚合展示系统、电子菜牌系统、教职工考勤打卡与补助系统、各模块大数据展示、无线同屏研讨矩阵等各校园一级与二级应用平台。
                            </div>
                            <img src={campus3} alt=""/>
                            <img src={campus4} alt=""/>
                        </div> 
                    </div>
                }
                {
                    id === 3 && <div>solution2</div>
                }
                {
                    id === 4 && <div>solution2</div>
                }
            </div>
        </>
    )
}