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
import style from './index.module.css'
import {useState} from "react";
const solutionItems = [solutionItem1,solutionItem2,solutionItem3,solutionItem4]
export const Home = () => {
    const [solutionTabIndex, setSolutionTabIndex] = useState(0)
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
    const handleTab = (item) => {
        setSolutionTabIndex(item.id)
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
            <div className={`${style.solution} px-6 overflow-hidden`}>
                <div className={'mt-16 text-gray-200'}>
                    <div className={'flex justify-around'}>
                        {
                            solutionTitleList.map(item => (
                                <div key={item.id} onClick={() => {
                                    handleTab(item)
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
                    <img src={solutionItems[solutionTabIndex]} className={'w-full h-auto'} alt=""/>
                </div>
            </div>
        </>
    )

}