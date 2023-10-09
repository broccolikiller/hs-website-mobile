import '../../index.css'
import {Collapse} from "antd-mobile";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export const Footer = () => {
    const [activeKey, setActiveKey] = useState(null)
    const navigate = useNavigate()
    const handlePanel = (route) => {
        if (Object.keys(route.query).length > 0) {
            navigate(`${route.path}?id=${route.query.id}`)
        } else {
            navigate(route.path)
        }
        setActiveKey(null)
    }
    const handleChange = key => setActiveKey(key)
    return (
        <>
            <div className={'px-4 bg-[#002547] text-white pb-8'}>
                <div className={'flex flex-col'}>
                    <Collapse onChange={handleChange} activeKey={activeKey} accordion>
                        <Collapse.Panel
                            className={'no-fold'}
                            onClick={() => handlePanel({path: '/about-us', query: {}})}
                            arrow={false}
                            key='1'
                            title='关于我们'
                        >
                        </Collapse.Panel>
                        <Collapse.Panel key='2' title='解决方案'>
                            <div
                                onClick={() => handlePanel({path: '/solution', query: {id: 1}})}
                                className={'py-4 text-slate-100 item-border'}>
                                智慧互动校园整体解决方案
                            </div>
                            <div
                                onClick={() => handlePanel({path: '/solution', query: {id: 2}})}
                                className={'py-4 text-slate-100 item-border'}>
                                智慧互动图书馆整体解决方案
                            </div>
                            <div
                                className={'py-4 text-slate-400 item-border'}>
                                智慧互动场馆整体解决方案
                            </div>
                            <div
                                className={'py-4 text-slate-400'}>
                                其他方案
                            </div>
                        </Collapse.Panel>
                        <Collapse.Panel key='3' title='产品中心'>
                            <div
                                onClick={() => handlePanel({path: '/production', query: {id: 1}})}
                                className={'py-4 text-slate-100 item-border'}>
                                交互&展示产品
                            </div>
                            <div
                                onClick={() => handlePanel({path: '/production', query: {id: 2}})}
                                className={'py-4 text-slate-100 item-border'}>
                                AI 智能产品
                            </div>
                            <div
                                onClick={() => handlePanel({path: '/production', query: {id: 3}})}
                                className={'py-4 text-slate-100 item-border'}>
                                物联网产品
                            </div>
                            <div
                                onClick={() => handlePanel({path: '/production', query: {id: 4}})}
                                className={'py-4 text-slate-100'}>
                                软件平台产品
                            </div>
                        </Collapse.Panel>
                        <Collapse.Panel key='4' className={'finally-collapse'} title='经典案例'>
                            <div
                                onClick={() => handlePanel({path: '/classic-case', query: {id: 1}})}
                                className={'py-4 text-slate-100 item-border'}>
                                文化行业
                            </div>
                            <div
                                onClick={() => handlePanel({path: '/classic-case', query: {id: 2}})}
                                className={'py-4 text-slate-100 item-border'}>
                                教育行业
                            </div>
                        </Collapse.Panel>
                    </Collapse>
                    <div className={'mt-4 footer-title text-center'}>
                        Copyright @ 2011-2023 hengshutech.net All Rights Reserve.
                    </div>
                    <div className={'mt-2 text-center'}>
                        <span>备案号: 浙ICP备17018287号-1</span>
                        <img style={{verticalAlign: "text-top"}} className={'inline px-1'}
                             src="/src/assets/footer/bottom-police-logo.png" alt=""/>
                        <span style={{wordBreak: "break-all"}}>浙公网安备3010802011030号</span>
                    </div>
                </div>
            </div>
        </>
    )
}