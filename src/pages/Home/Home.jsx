import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/home/banner1.png'
import img2 from '../../assets/home/banner2.png'
import img3 from '../../assets/home/banner3.png'
import solutionItem1 from '../../assets/home/solution-item-1.png'
import solutionItem2 from '../../assets/home/solution-item-2.png'
import solutionItem3 from '../../assets/home/solution-item-3.png'
import solutionItem4 from '../../assets/home/solution-item-4.png'
import productionCenterTitle from '../../assets/home/production-center-title.png'
import productionCenterItem1 from '../../assets/home/production-center-item1.png'
import productionCenterItem2 from '../../assets/home/production-center-item2.png'
import productionCenterItem3 from '../../assets/home/production-center-item3.png'
import productionCenterItem4 from '../../assets/home/production-center-item4.png'
import classicCaseItem1 from '../../assets/home/classic-case-item1.png'
import classicCaseItem2 from '../../assets/home/classic-case-item2.png'
import classicCaseItem3 from '../../assets/home/classic-case-item3.png'
import classicCaseItem4 from '../../assets/home/classic-case-item4.png'
import classicCaseItem5 from '../../assets/home/classic-case-item5.png'
import classicCaseItem6 from '../../assets/home/classic-case-item6.png'
import classicCaseItem7 from '../../assets/home/classic-case-item7.png'
import classicCaseItem8 from '../../assets/home/classic-case-item8.png'
import classicCaseItem9 from '../../assets/home/classic-case-item9.png'
import classicCaseItem10 from '../../assets/home/classic-case-item10.png'
import client from '../../assets/home/client.png'
import style from './index.module.css'
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useTabIndexStore} from "../../store/index.jsx";

const solutionItems = [solutionItem1, solutionItem2, solutionItem3, solutionItem4]
export const Home = () => {
    const [params, setParams] = useSearchParams()
    useEffect(() => {
        if (params.get('tag')) {
            goAnchor('#classic-client-list')
        } else {
            window.scrollTo(0, 0);
        }
    }, [params])
    useEffect(() => {
        if (params.has('tag')) {
            goAnchor('#classic-client-list')
        } else {
            window.scrollTo(0, 0);
        }
    }, []);
    const goAnchor = (id) => {
        let el = document.querySelector(id);
        // chrome
        document.body.scrollTop = el.offsetTop - 40;
        // firefox
        document.documentElement.scrollTop = el.offsetTop - 40;
    }
    const [solutionTitleList, setSolutionTitleList] = useState([
        {
            id: 0,
            name: '教育行业'
        },
        {
            id: 1,
            name: '图书馆行业'
        },
        {
            id: 2,
            name: '文化场馆'
        },
        {
            id: 3,
            name: '其他行业'
        },
    ])
    const [classicCaseTitleList, setClassicCaseTitleList] = useState([
        {
            id: 0,
            name: '教育行业'
        },
        {
            id: 1,
            name: '文化行业'
        }
    ])
    const navigate = useNavigate()
    const handleSolutionTab = (item) => {
        changeSolutionTabIndex(item.id)
    }
    const handleClassicCaseTab = (item) => {
        changeHomeClassicCaseTabIndex(item.id)
    }

    const skipSolution = (item) => {
        if (item > 2) return
        navigate(`/solution?id=${item}`)
    }
    const skipProductionCenter = (item) => {
        navigate(`/production?id=${item}`)
    }
    const skipClassicCase = (id) => {
        if (id === 2) return
        navigate(`/classic-case-introduce?id=${id}`)
    }
    const solutionTabIndex = useTabIndexStore(state => state.solutionTabIndex)
    const homeClassicCaseTabIndex = useTabIndexStore(state => state.homeClassicCaseTabIndex)
    const changeSolutionTabIndex = useTabIndexStore(state => state.changeSolutionTabIndex)
    const changeHomeClassicCaseTabIndex = useTabIndexStore(state => state.changeHomeClassicCaseTabIndex)

    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{delay: 5000, disableOnInteraction: false}}
                loop
                pagination={{clickable: true}}
            >
                <SwiperSlide>
                    <div className={'h-[474px] overflow-hidden'}>
                        <img className={'w-full h-auto'} src={img1} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[474px] overflow-hidden'}>
                        <img className={'w-full h-auto'} src={img2} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={'h-[474px] overflow-hidden'}>
                        <img className={'w-full h-auto'} src={img3} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/*解决方案*/}
            <div className={`${style.solution} px-6 overflow-hidden text-base`}>
                <div className={'mt-16 text-gray-200'}>
                    <div className={'flex justify-around'}>
                        {
                            solutionTitleList.map(item => (
                                <div key={item.id} onClick={() => {
                                    handleSolutionTab(item)
                                }}>
                                    <div
                                        className={`${item.id === solutionTabIndex ? 'text-white' : ''}`}>{item.name}</div>
                                    <div
                                        className={`h-[2px] ${item.id === solutionTabIndex ? 'bg-white' : 'bg-transparent'} rounded-[1px] mt-1`}></div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className={'mt-3'}>
                    {
                        solutionItems.map((item, index) => {
                            return (
                                solutionTabIndex === index &&
                                <img onClick={() => skipSolution(index + 1)} key={index} src={item}
                                     className={'w-full h-auto'} alt=""/>
                            )
                        })
                    }

                </div>
            </div>
            {/*产品中心*/}
            <div className={'flex justify-center my-2'}>
                <img className={'w-[27%]'} src={productionCenterTitle} alt=""/>
            </div>
            <div className={'px-4'}>
                <div className={'mb-2 flex justify-center'}>
                    <div className={'overflow-hidden rounded-md'}>
                        <img onClick={() => skipProductionCenter(1)} className={''} src={productionCenterItem1} alt=""/>
                    </div>
                </div>
                <div className={'mb-2 flex justify-center'}>
                    <div className={'overflow-hidden rounded-md'}>
                        <img onClick={() => skipProductionCenter(2)} className={''} src={productionCenterItem2} alt=""/>
                    </div>
                </div>
                <div className={'mb-2 flex justify-center'}>
                    <div className={'overflow-hidden rounded-md'}>
                        <img onClick={() => skipProductionCenter(3)} className={''} src={productionCenterItem3} alt=""/>
                    </div>
                </div>
                <div className={'mb-4 flex justify-center'}>
                    <div className={'overflow-hidden rounded-md'}>
                        <img onClick={() => skipProductionCenter(4)} className={''} src={productionCenterItem4} alt=""/>
                    </div>
                </div>
            </div>
            {/*经典案例*/}
            <div className={`${style.classicCase} px-6 overflow-hidden text-base`}>
                <div className={'mt-16 text-gray-200'}>
                    <div className={'flex justify-evenly'}>
                        {
                            classicCaseTitleList.map(item => (
                                <div key={item.id} onClick={() => handleClassicCaseTab(item)}>
                                    <div
                                        className={`${item.id === homeClassicCaseTabIndex ? 'text-white' : ''}`}>{item.name}</div>
                                    <div
                                        className={`h-[2px] ${item.id === homeClassicCaseTabIndex ? 'bg-white' : 'bg-transparent'} rounded-[1px] mt-1`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    homeClassicCaseTabIndex === 0 ?
                        <div className={'mt-3'}>
                            <div className={'flex'}>
                                <div className={'flex-1'} onClick={() => skipClassicCase(7)}>
                                    <img src={classicCaseItem7} alt=""/>
                                </div>
                                {/*空元素占位*/}
                                <div className={'h-full w-1.5 bg-amber-600'}></div>
                                <div className={'flex-1'} onClick={() => skipClassicCase(8)}>
                                    <img className={'h-full'} src={classicCaseItem8} alt=""/>
                                </div>
                            </div>
                            <div className={'flex mt-1.5'}>
                                <div className={'flex-1'} onClick={() => skipClassicCase(9)}>
                                    <img src={classicCaseItem9} alt=""/>
                                </div>
                                {/*空元素占位*/}
                                <div className={'h-full w-1.5 bg-amber-600'}></div>
                                <div className={'flex-1'} onClick={() => skipClassicCase(10)}>
                                    <img src={classicCaseItem10} alt=""/>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={'mt-3'}>
                            <div className={'flex justify-center'} onClick={() => skipClassicCase(1)}>
                                <img src={classicCaseItem1} alt=""/>
                            </div>
                            <div className={'flex mt-1.5'}>
                                {/*left*/}
                                <div className={'flex-1'}>
                                    <div onClick={() => skipClassicCase(2)}
                                         className={'mb-1.5  h-[182px] overflow-hidden'}>
                                        <img src={classicCaseItem2} alt=""/>
                                    </div>
                                    <div onClick={() => skipClassicCase(3)} className={'h-[115px] overflow-hidden'}>
                                        <img src={classicCaseItem3} alt=""/>
                                    </div>
                                </div>
                                {/*middle 空元素占位*/}
                                <div className={'h-full w-1.5 bg-amber-600'}></div>
                                {/*right*/}
                                <div className={'flex-1'}>
                                    <div onClick={() => skipClassicCase(4)}
                                         className={'mb-1.5 h-[88px] overflow-hidden'}>
                                        <img src={classicCaseItem4} alt=""/>
                                    </div>
                                    <div onClick={() => skipClassicCase(5)}
                                         className={'mb-1.5 h-[88px] overflow-hidden'}>
                                        <img src={classicCaseItem5} alt=""/>
                                    </div>
                                    <div onClick={() => skipClassicCase(6)} className={'h-[115px] overflow-hidden'}>
                                        <img src={classicCaseItem6} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>

                }
            </div>
            {/*客户名单*/}
            <div id="classic-client-list" className={'mb-4 flex justify-center'}>
                <img src={client} alt=""/>
            </div>
        </>
    );

}