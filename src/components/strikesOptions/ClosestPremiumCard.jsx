import { Fragment, useEffect, useState } from "react"

const ClosestPremiumCard = ({id, handlePremium, strikeParmater}) => {
    const [range, setRange] = useState(50);
    useEffect(()=>{handlePremium(id,range)},[range])
    return (
        <div className="flex items-center" >
            <h4 className="text-sm font-bold">Premium</h4>
            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                type="number" min="50" defaultValue={50} value={strikeParmater}
                onChange={(e)=>setRange(e.target.value)}                        
                />
        </div >
    )
}

export default ClosestPremiumCard;