import { useEffect, useState } from "react";

const PremiumRangeCard = ({id, handlePremiumRange, strikeParamemter  }) => {
    console.log(strikeParamemter, "inside comp")
    const [upper, setUpper]=useState(strikeParamemter.Upper || 200 );
    const [lower,setLower]=useState(strikeParamemter.Lower || 50);
    useEffect(()=>{ handlePremiumRange(id,lower,upper) },[upper,lower])
    return (
        <div className="flex items-center">
            <h4 className="text-sm font-bold">Lower</h4>
            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                type="number" min="1" defaultValue={200}
                value={lower} onChange={(e)=>setLower(+e.target.value)}
                 />

            <h4 className="text-sm font-bold">Upper</h4>
            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-20"
                type="number" min="1" defaultValue={50}
                value={upper} onChange={(e)=>setUpper(+e.target.value)}
                />
        </div>
    )
}

export default PremiumRangeCard;