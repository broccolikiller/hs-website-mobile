import {useEffect, useState} from "react";
import {Tabs} from "antd-mobile";
import './index.css'
import {AllProductionList} from "./allProductionList.js";
import {Card} from "./Card.jsx";
import {useSearchParams} from "react-router-dom";

export const Production = () => {
    const tabList = [
        AllProductionList.slice(0, 5),
        AllProductionList.slice(5, 9),
        AllProductionList.slice(9, 12),
        AllProductionList.slice(12, 16)
    ]
    const [params, serParams] = useSearchParams()
    const [tabBarList, setTabBarList] = useState([
        {
            id: 1,
            name: '交互&展示产品'
        },
        {
            id: 2,
            name: 'AI 智能产品'
        },
        {
            id: 3,
            name: '物联网产品'
        },
        {
            id: 4,
            name: '软件平台产品'
        },
    ])
    const [activeKey, setActiveKey] = useState('1')
    useEffect(()=>{
        setActiveKey(params.get('id'))
    },[params])

    return (
        <>
            <div>
                <Tabs onChange={(item) => {setActiveKey(item)}} activeKey={activeKey} defaultActiveKey='1'>
                    {
                        tabBarList.map((item, index) => (
                            <Tabs.Tab title={item.name} key={item.id}>
                                {
                                    tabList[index].map((item) => <Card key={item.id} {...item} />)
                                }
                            </Tabs.Tab>
                        ))
                    }

                </Tabs>
            </div>
        </>
    )
}