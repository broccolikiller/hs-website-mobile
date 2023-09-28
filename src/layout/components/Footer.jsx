import {useRef} from "react";
import {Disclosure, Transition} from '@headlessui/react'
export const Footer = () => {
    const ref = useRef(null)
    return (
        <>
            {/*bg-[#002547]*/}
            <div className={'px-4  text-white pb-8'}>
                <div ref={ref} className={'flex flex-col'}>
                    <Disclosure>
                        <Disclosure.Button className="py-2">
                            Is team pricing available?
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                        <Disclosure.Panel className="text-gray-500">
                            Yes! You can purchase a license that you can share with your entire
                            team.
                        </Disclosure.Panel>
                        </Transition>
                    </Disclosure>
                    {/*<div className={''}>*/}
                    {/*    <div className={'mt-4'}>关于我们</div>*/}
                    {/*    <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <div className={'mt-4'}>解决方案</div>*/}
                    {/*    <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <div className={'mt-4'}>产品中心</div>*/}
                    {/*    <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <div className={'mt-4'}>经典案例</div>*/}
                    {/*    <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>*/}
                    {/*</div>*/}
                    {/*<div className={'mt-4'}>*/}
                    {/*    Copyright @ 2011-2020 hengshutech.net All Rights Reserve.*/}
                    {/*</div>*/}
                    <div className={'mt-2'}>
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