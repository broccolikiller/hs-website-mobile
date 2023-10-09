import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Tabs} from "antd-mobile";
import './index.css'
import {useTabIndexStore} from "../../store/index.jsx";

export const ClassicCase = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()
    const [activeKey, setActiveKey] = useState('1')
    useEffect(() => {
        //setActiveKey(params.get('id') || '1')
        changeClassicCaseTabIndex(params.get('id') || '1')
    }, [params])

    const skipClassicCase = (id) => {
        if (id === 2) return
        navigate(`/classic-case-introduce?id=${id}`)
    }
    const classicCaseTabIndex = useTabIndexStore(state => state.classicCaseTabIndex)
    const changeClassicCaseTabIndex = useTabIndexStore(state => state.changeClassicCaseTabIndex)

    return (
        <>
            <div>
                <div>
                    <Tabs onChange={(item) => {
                        //setActiveKey(item)
                        changeClassicCaseTabIndex(item)
                    }} activeKey={classicCaseTabIndex} defaultActiveKey='1'>
                        <Tabs.Tab title="文化行业" key="1">
                            <div onClick={() => skipClassicCase(1)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/culture-1.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>浙江省之江文化中心</div>
                                    <div className={'text-sm line-clamp-3 indent-7'}>
                                        浙江省之江文化中心，是浙江省内体量最大的现代复合文化综合体，位于杭州市西湖区之江板块，集结浙江图书馆之江馆
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(2)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/culture-2.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold '}>国家版本馆杭州分馆</div>
                                    <div></div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(6)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/culture-3.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>杭州市图书馆</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>杭州市图书馆分别在2016、17、18年连续三年采购我司互动智能视窗系统、灵动创客空间、多媒体大屏互动系统。其中......
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(4)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/culture-4.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>衢州文化中心</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>衢州市文化艺术中心四馆使用面积共35597.52平方米，包含图书馆、美术馆、文化馆、非遗馆
                                        (含传习所)，于2023年元旦开馆迎接衢州市民。
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(3)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/culture-5.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>苏州市第二图书馆</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>苏州第二图书馆，突出四大亮点与特色，打造国内首个大型智能化书库，打造儿童向往的“悦读天地”，打造高端信息.....
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(5)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/culture-6.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>宁波市图书馆新馆</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>宁波市图书馆新馆秉承“开放自由、智能便捷、个性特色”的建设理念，成为了宁波市公共图书馆服务体系的中心馆，宁......
                                    </div>
                                </div>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab title="教育行业" key="2">
                            <div onClick={() => skipClassicCase(7)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/education-1.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>浙江水利水电学院南浔新校区</div>
                                    <div className={'text-sm line-clamp-3 indent-7'}>南浔校区总占地面积约1271亩
                                        (其中建筑用地面积1000亩，水域面积271亩) ，总建筑面积约43.3万平方米，地下建筑......
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(8)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/education-2.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>中国科学技术大学高新校区</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>中国科学技术大学高新校区图书馆是目前国内最先进的高校馆之一，本次新馆建设全馆
                                        部署了横竖科技智慧互动图书馆
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(9)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/education-3.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>浙江音乐学院新校区</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>浙江音乐学院是教育部于2016年3月1日批准正式成立的公办全日制普通高校，校园环境优美，设施一流，占地面积602
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => skipClassicCase(10)}
                                 className={'rounded shadow-md border flex overflow-hidden h-24 mb-6 p-1'}>
                                <img className={'w-2/5'} src="/src/assets/classicCase/education-4.png" alt=""/>
                                <div className={'pl-2'}>
                                    <div className={'font-bold'}>上海财经大学</div>
                                    <div
                                        className={'text-sm line-clamp-3 indent-7'}>上海财经大学教育部直属的一所以经济管理学科为主，经、管、法、文、理、哲等多学科协调发展的研究型重点大学，国...
                                    </div>
                                </div>
                            </div>
                        </Tabs.Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}