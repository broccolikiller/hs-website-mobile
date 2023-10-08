import './index.css'

export const Card = (props) => {
    return (
        <>
            <div className={'px-3'}>
                <div className={'overflow-hidden rounded-xl shadow-lg mb-4 min-h-[336px]'}>
                    <img className={'w-full h-auto'} src={props.img} alt=""/>
                    <div className={'text-[#1E89EC] font-bold text-xl py-1.5 text-center'}>{props.title}</div>
                    <div className={'px-4 pb-2'}>{props.des}</div>
                </div>
            </div>
        </>
    )
}