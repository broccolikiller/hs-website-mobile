import './index.css'

export const Card = (props)=>{
    //console.log(props)
    return (
        <>
            <div>
                <img src={props.img} alt=""/>
                <div className={''}>{props.title}</div>
                <div className={''}>{props.des}</div>
            </div>
        
        </>
    )
}