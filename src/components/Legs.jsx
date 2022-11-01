import { Fragment, useState } from "react"
import Segment from "./Segment";

const Legs = () => {
    const handleClick = () => {
        setLegAdd(!legAdd);
        console.log(legAdd)
    }

    const [legAdd, setLegAdd] = useState(false);
    const [ totalLeg, setTotalLeg ] = useState(1)

    const handleChange = ( { target } ) => {
        const { name, value } = target
        console.log(name, value)
        if ( name === "totalLot" ) setTotalLeg(value)
    }

    // const handleKey = (e) => {
    //     const exceptThisSymbols = ["e", "E", "+", "-", "."];
    //     exceptThisSymbols.includes(e.key)
    // }

    return (
        <Fragment>
            <div 
            className="bg-green-200 border-4-black mx-auto"
            style={{ width: "80%"}}>
                <div
                 style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                    <h2 className="font-bold">Legs</h2>
                    <button 
                    style={{opacity:legAdd ? "0.6" : ""}} className="font-bold text-xl text-[#375A9E]" onClick={handleClick}>+ Add Leg</button>
                </div>
                {
                    legAdd ? <Fragment>
                        <Segment handleChange={handleChange} totalLeg={totalLeg} />
                        <div className="p-4" >
                            <button className="px-14 py-1 bg-[#375A9E] text-white text-sm font-semibold rounded-full mr-2">Add Leg</button>
                            <button className="px-14 py-1 bg-white text-[#375A9E] text-sm font-semibold rounded-full ml-2"
                            onClick={()=>setLegAdd(false)}>Cancel</button>
                        </div>
                    </Fragment> : ""
                }
            </div>
        </Fragment>
    )
}

export default Legs;