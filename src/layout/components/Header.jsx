import {Popover, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import logo from '../../assets/header/logo.png'
import {Collapse} from "antd-mobile";
import '../../index.css'
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    const handlePanel = (route) => {
        console.log(route)
        if (Object.keys(route.query).length > 0) {
            navigate(`${route.path}?id=${route.query.id}`)
        } else {
            navigate(route.path)
        }

    }
    return (
        <div
            className="h-10 fixed z-10 w-full bg-gradient-to-r from-[#004FC8] to-[#00B1B9] flex justify-between items-center px-4">
            <div className="h-[40%]">
                <img src={logo} className="h-full" alt=""/>
            </div>
            <div>
                <Popover className="relative flex items-center">
                    {({open}) => (
                        <>
                            <Popover.Button className="focus-visible:outline-0 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    className="absolute -right-4 top-5 mt-3 w-screen transform sm:px-0 lg:max-w-3xl bg-[#667894] text-white">
                                    <Collapse accordion>
                                        <Collapse.Panel
                                            onClick={() => handlePanel({path: '/home', query: {}})}
                                            className={'no-fold'}
                                            arrow={false}
                                            key='1'
                                            title='首页'
                                        >
                                        </Collapse.Panel>
                                        <Collapse.Panel
                                            onClick={() => handlePanel({path: '/about-us', query: {}})}
                                            className={'no-fold'}
                                            arrow={false}
                                            key='2'
                                            title='关于我们'
                                        >
                                        </Collapse.Panel>
                                        <Collapse.Panel key='3' title='解决方案'>
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
                                            <div className={'py-4 text-slate-400 '}>其他方案</div>
                                        </Collapse.Panel>
                                        <Collapse.Panel key='4' title='产品中心'>
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
                                        <Collapse.Panel className={'finally-collapse'} key='5' title='经典案例'>
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
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </div>
    )
}

