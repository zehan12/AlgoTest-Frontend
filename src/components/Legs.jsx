import { Fragment, useState } from "react"
import Segment from "./Segment";

const Legs = () => {
    const handleClick = () => {
        setLegAdd(!legAdd);
        console.log(legAdd)
    }

    const [legAdd, setLegAdd] = useState(false);

    //* options states initialised with default value
    const [totalLeg, setTotalLeg] = useState(1);
    const [position, setPosition] = useState("Sell");
    const [optionType, setOptionType] = useState("Call");
    const [expiry, setExpiry] = useState("Weekly");
    const [strike, setStrike] = useState("Strike Type");
    const [strikeType, setStrikeType] = useState("ATM");
    const [upper, setUpper] = useState(200)
    const [lower, setLower] = useState(50)
    const [premium, setPremium] = useState(50);
    const [plusMinus, setPlusMinus] = useState("+");
    const [multiplier, setMultiplier] = useState(0.5)


    const handleChange = ({ target }) => {
        const { name, value } = target
        console.log(name, value)
        if (name === "totalLot") setTotalLeg(value);
        else if (name === "position") setPosition(value);
        else if (name === "optionType") setOptionType(value);
        else if (name === "expiry") setExpiry(value);
        else if (name === "strike") setStrike(value);
        else if (name === "strikeType") setStrikeType(value);
        else if (name === "premium") setPremium(value);
        else if (name === "upper") setUpper(value);
        else if (name === "lower") setLower(value);
        else if (name === "plusMinus") setPlusMinus(value);
        else if (name === "multiplier") setMultiplier(value);

    }

    // const handleKey = (e) => {
    //     const exceptThisSymbols = ["e", "E", "+", "-", "."];
    //     exceptThisSymbols.includes(e.key)
    // }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(totalLeg)
    }

    return (
        <Fragment>
            <div
                className="bg-green-200 border-4-black mx-auto"
                style={{ width: "80%" }}>
                <div
                    style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                    <h2 className="font-bold">Legs</h2>
                    <button
                        style={{ opacity: legAdd ? "0.6" : "" }} className="font-bold text-xl text-[#375A9E]" onClick={handleClick}>+ Add Leg</button>
                </div>
                {
                    legAdd ? <Fragment>
                        <Segment
                            handleChange={handleChange}
                            totalLeg={totalLeg}
                            position={position}
                            optionType={optionType}
                            expiry={expiry}
                            strike={strike}
                            strikeType={strikeType}
                            upper={upper}
                            lower={lower}
                            premium={premium}
                            plusMinus={plusMinus}
                            multiplier={multiplier}
                        />
                        <div className="p-4" >
                            <button className="px-14 py-1 bg-[#375A9E] text-white text-sm font-semibold rounded-full mr-2"
                             onClick={(e)=>handleSubmit(e)}
                            >Add Leg</button>
                            <button className="px-14 py-1 bg-white text-[#375A9E] text-sm font-semibold rounded-full ml-2"
                                onClick={() => setLegAdd(false)}>Cancel</button>
                        </div>
                    </Fragment> : ""
                }
            </div>
        </Fragment>
    )
}

export default Legs;