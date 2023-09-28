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
import style from './index.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const solutionItems = [solutionItem1, solutionItem2, solutionItem3, solutionItem4]
export const Home = () => {
    const [solutionTabIndex, setSolutionTabIndex] = useState(0)
    const [classicCaseTabIndex, setClassicCaseTabIndex] = useState(0)
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
    const [classicCaseitleList, setclassicCaseTitleList] = useState([
        {
            id: 0,
            name: '文化行业'
        },
        {
            id: 1,
            name: '教育行业'
        }
    ])
    const navigate = useNavigate()
    const handleSolutionTab = (item) => {
        setSolutionTabIndex(item.id)
    }
    const handleClassicCaseTab = (item) => {
        setClassicCaseTabIndex(item.id)
    }

    const skipSolution = (item) => {
        if (item > 2) return
        navigate(`/solution?id=${item}`)
    }
    const skipProductionCenter = (item) => {
        navigate(`/production?id=${item}`)
    }
    const skipClassicCase = (id) => {
        if(id===2) return
        navigate(`/classic-case-introduce?id=${id}`)
    }
    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{delay: 5000, disableOnInteraction: false}}
                loop
                pagination={{clickable: true}}
            >
                <SwiperSlide>
                    <div>
                        <img className={'w-full h-auto'} src={img1} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className={'w-full h-auto'} src={img2} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className={'w-full h-auto'} src={img3} alt=""/>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/*解决方案*/}
            <div className={`${style.solution} px-6 overflow-hidden`}>
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
                {/*onClick={}*/}
                <div className={'mt-2'}>
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
            <div className={'flex justify-center'}>
                <img src={productionCenterTitle} alt=""/>
            </div>
            <div className={'px-4'}>
                <img onClick={() => skipProductionCenter(1)} className={''} src={productionCenterItem1} alt=""/>
                <img onClick={() => skipProductionCenter(2)} className={''} src={productionCenterItem2} alt=""/>
                <img onClick={() => skipProductionCenter(3)} className={''} src={productionCenterItem3} alt=""/>
                <img onClick={() => skipProductionCenter(4)} className={''} src={productionCenterItem4} alt=""/>
            </div>
            {/*经典案例*/}
            <div className={`${style.classicCase} px-6 overflow-hidden`}>
                <div className={'mt-16 text-gray-200'}>
                    <div className={'flex justify-evenly'}>
                        {
                            classicCaseitleList.map(item => (
                                <div key={item.id} onClick={() => handleClassicCaseTab(item)}>
                                    <div
                                        className={`${item.id === classicCaseTabIndex ? 'text-white' : ''}`}>{item.name}</div>
                                    <div
                                        className={`h-[2px] ${item.id === classicCaseTabIndex ? 'bg-white' : 'bg-transparent'} rounded-[1px] mt-1`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    classicCaseTabIndex === 0 ? <div>
                            <div onClick={() => skipClassicCase(1)}>
                                <img src={classicCaseItem1} alt=""/>
                            </div>
                            <div className={'flex'}>
                                {/*left*/}
                                <div className={''}>
                                    <div onClick={() => skipClassicCase(2)} className={''}>
                                        <img src={classicCaseItem2} alt=""/>
                                    </div>
                                    <div onClick={() => skipClassicCase(3)} className={''}>
                                        <img src={classicCaseItem3} alt=""/>
                                    </div>
                                </div>
                                {/*right*/}
                                <div className={''}>
                                    <div onClick={() => skipClassicCase(4)} className={''}>
                                        <img src={classicCaseItem4} alt=""/>
                                    </div>
                                    <div onClick={() => skipClassicCase(5)} className={''}>
                                        <img src={classicCaseItem5} alt=""/>
                                    </div>
                                    <div onClick={() => skipClassicCase(6)} className={''}>
                                        <img src={classicCaseItem6} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        :
                        <div>
                            <div className={'flex'}>
                                <div onClick={() => skipClassicCase(7)}>
                                    <img src={classicCaseItem7} alt=""/>
                                </div>
                                <div onClick={() => skipClassicCase(8)}>
                                    <img src={classicCaseItem8} alt=""/>
                                </div>
                            </div>
                            <div className={'flex'}>
                                <div onClick={() => skipClassicCase(9)}>
                                    <img src={classicCaseItem9} alt=""/>
                                </div>
                                <div onClick={() => skipClassicCase(10)}>
                                    <img src={classicCaseItem10} alt=""/>
                                </div>
                            </div>
                        </div>
                }
            </div>
            {/*客户名单*/}
            <div className={`${style.client} mb-4`}>

            </div>
        </>
    )

}