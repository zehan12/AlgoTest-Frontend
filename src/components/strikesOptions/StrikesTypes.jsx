import { useEffect, useState } from "react";

const StrikesTypes = ({strikeParameter, id, handleStrike}) => {

    const [strikeVal, setStrikeVal] = useState( strikeParameter || "ATM");

    useEffect(()=>{ handleStrike(id, strikeVal) },[strikeVal])

    return (
        <select className="my-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="StrikeParameter" value={strikeParameter} onChange={(e)=> setStrikeVal(e.target.value) }>
            <option value="ATM" >ATM</option>
            <Option val={"IMT"} />
            <Option val={"OTM"} />
        </select>
    )
}


export default StrikesTypes;

const arrayOf20WithKey = (key) => {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
        arr.push(key + i);
    }
    return arr;
}

const Option = ({ val }) => {
    return (
        <>
            {arrayOf20WithKey(val).map((ele) => <option key={ele} value={ele}>{ele}</option>)}
        </>
    )
} 