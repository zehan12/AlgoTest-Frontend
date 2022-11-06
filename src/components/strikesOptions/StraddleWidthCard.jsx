import { useEffect, useState } from "react";

const StraddleWidthCard = ({id, handleStraddle, strikeParamemter }) => {
    const [sign, setSign ] = useState("+");
    const [val, setVal] = useState("1.5");
    useEffect(()=>{ handleStraddle(id,sign,val) },[sign,val])
    return (
        <div className="flex justify-center items-center text-xs font-semibold">
            <h4><b>[</b> ATM Strike</h4>
            <select className="h-6 mx-3 w-14 px-2 rounded-full text-sm border-x-4 border-white " name="PlusMinus" value={sign}
                onChange={(e)=>{setSign(e.target.value)}}
            >
                <option value="+">+</option>
                <option value="-">-</option>
            </select>
            <b>(</b>

            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                type="number" min="1" value={val} onChange={(e)=>setVal(+e.target.value)} />
            <h4>
                <b>x </b> ATM Straddle Price <b> )]</b>
            </h4>
        </div>
    )
}

export default StraddleWidthCard;