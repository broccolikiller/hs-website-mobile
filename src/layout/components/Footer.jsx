import '../../index.css'

export const Footer = () => {
    const handleClick = (e) => {
        console.log(e)
        const elementList = Array.from(document.querySelectorAll('.footer-title'))
        elementList.forEach(item=>{
            if(e.target.innerHTML===item.innerHTML){
                console.log(item.innerHTML)
                item.classList.add('open')
            }else {
                item.classList.remove('open')
            }
        })
        //if(e.target.className.indexOf('open')>-1){
        //    e.target.classList.remove('open')
        //}else {
        //    e.target.classList.add('open')
        //}
       
    }
    return (
        <>
            {/*bg-[#002547]*/}
            <div className={'px-4 bg-[#002547] text-white pb-8'}>
                <div className={'flex flex-col'}>
                    <div className={''}>
                        <div onClick={handleClick} className={'mt-4 footer-title'}>关于我们</div>
                        <div className="footer-content text-black">
                            吉他（意大利语：Chitarra），又译为结他或六弦琴。是一种弹拨乐器，通常有六条弦，形状与提琴相似。
                            吉他在流行音乐、摇滚音乐、蓝调、民歌、佛朗明哥中，常被视为主要乐器。而在古典音乐的领域里，吉他常以独奏或二重奏的型式演出；当然，在室内乐和管弦乐中，吉他亦扮演着相当程度的陪衬角色。
                            古典吉他与小提琴、钢琴并列为世界著名三大乐器。
                        </div>
                        <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>
                    </div>
                    <div>
                        <div onClick={handleClick} className={'mt-4 footer-title'}>解决方案</div>
                        <div className="footer-content text-black">
                            吉他（意大利语：Chitarra），又译为结他或六弦琴。是一种弹拨乐器，通常有六条弦，形状与提琴相似。
                            吉他在流行音乐、摇滚音乐、蓝调、民歌、佛朗明哥中，常被视为主要乐器。而在古典音乐的领域里，吉他常以独奏或二重奏的型式演出；当然，在室内乐和管弦乐中，吉他亦扮演着相当程度的陪衬角色。
                            古典吉他与小提琴、钢琴并列为世界著名三大乐器。
                        </div>
                        <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>
                    </div>
                    <div>
                        <div onClick={handleClick} className={'mt-4 footer-title'}>产品中心</div>
                        <div className="footer-content text-black">
                            吉他（意大利语：Chitarra），又译为结他或六弦琴。是一种弹拨乐器，通常有六条弦，形状与提琴相似。
                            吉他在流行音乐、摇滚音乐、蓝调、民歌、佛朗明哥中，常被视为主要乐器。而在古典音乐的领域里，吉他常以独奏或二重奏的型式演出；当然，在室内乐和管弦乐中，吉他亦扮演着相当程度的陪衬角色。
                            古典吉他与小提琴、钢琴并列为世界著名三大乐器。
                        </div>
                        <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>
                    </div>
                    <div>
                        <div onClick={handleClick} className={'mt-4 footer-title'}>经典案例</div>
                        <div className="footer-content text-black">
                            吉他（意大利语：Chitarra），又译为结他或六弦琴。是一种弹拨乐器，通常有六条弦，形状与提琴相似。
                            吉他在流行音乐、摇滚音乐、蓝调、民歌、佛朗明哥中，常被视为主要乐器。而在古典音乐的领域里，吉他常以独奏或二重奏的型式演出；当然，在室内乐和管弦乐中，吉他亦扮演着相当程度的陪衬角色。
                            古典吉他与小提琴、钢琴并列为世界著名三大乐器。
                        </div>
                        <div className={'bg-white h-0.5 rounded-[1px] mt-4'}></div>
                    </div>
                    <div  className={'mt-4 footer-title'}>
                        Copyright @ 2011-2020 hengshutech.net All Rights Reserve.
                    </div>
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