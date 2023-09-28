import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Tabs} from "antd-mobile";
import './index.css'

export const ClassicCase = () => {
    const [params, setParams] = useSearchParams()
    const [activeKey, setActiveKey] = useState('1')
    useEffect(() => {
        console.log(params.get('id'))
        setActiveKey(params.get('id'))
    }, [params])

    return (
        <>
            <div>
               <div className={''}>
                   <Tabs onChange={(item) => {setActiveKey(item)}} activeKey={activeKey} defaultActiveKey='1' >
                       <Tabs.Tab title="文化行业" key="1">
                           
                       </Tabs.Tab>
                       <Tabs.Tab title="教育行业" key="2">
                           
                       </Tabs.Tab>
                   </Tabs>
               </div>
            </div>
        </>
    )
}