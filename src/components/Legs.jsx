import { Fragment, useState, useEffect } from "react"
import LegCard from "./LegCard";
import LegList from "./LegList";
import Segment from "./Segment";

const Legs = () => {
    const handleClick = () => {
        setLegAdd(!legAdd);
    }

    const [legAdd, setLegAdd] = useState(false);

    //* options states initialised with default value
    const [totalLeg, setTotalLeg] = useState(1);
    const [position, setPosition] = useState("Sell");
    const [optionType, setOptionType] = useState("Call");
    const [expiry, setExpiry] = useState("Weekly");
    const [strike, setStrike] = useState("Strike Type");
    const [strikeType, setStrikeType] = useState("ATM");
    const [upper, setUpper] = useState(200);
    const [lower, setLower] = useState(50);
    const [premium, setPremium] = useState(50);
    const [plusMinus, setPlusMinus] = useState("+");
    const [multiplier, setMultiplier] = useState(0.5);

    //? idea -------------------------
    // const [leg, setLeg] = useState({
    //     totalLeg: 1,
    //     position: "Sell",
    //     optionType: "Call",
    //     expiry: "Weekly",
    //     strike: "Strike Type",
    //     strikeType: "ATM",
    //     upper: 200,
    //     lower: 50,
    //     plusMinus: "+",
    //     multiplier: 0.5
    // });

    // const [ legMomentumEnable, setLegMomentumEnable ] = useState(false);
    // const [legTargetEnable, setLegTargetEnable] = useState(false);
    // const [ legStopLossEnable, setLegStopLossEnable ] = useState(false);
    // const [ leg ]



    //! add legItems in state
    const [legItems, setLegItems] = useState(JSON.parse(localStorage.getItem("LEG")) || [])

    const handleChange = ({ target }) => {
        const { name, value } = target
        // switch ( name ) {
        //     case "totalLot":
        //         return setTotalLeg(value)
        //        default:
        //            return
        // }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        let StrikeParameter = strike === "Strike Type" ? strikeType :
            strike === "Premium Range" ? { Lower: lower, Upper: upper } :
                strike === "Closest Premium" ? { Premium: premium } :
                    strike === "Straddle Width" ? { Adjustment: plusMinus, Multiplier: multiplier } : ""

        const legData = {
            id: Date.now(),
            positionType: position,
            Lots: totalLeg,

            legStopLossEnable: false,

            LegStopLoss: {
                Type: "None",
                Value: 0,
            },

            legTargetEnable: false,

            LegTarget: {
                Type: "None",
                Value: 0,
            },

            LegTrailSLEnable: false,

            LegTrailSL: {
                Type: "None",
                Value: {
                    InstrumentMove: 0,
                    StopLossMove: 0,
                }
            },

            legMomentumEnable: false,

            LegMomentum: {
                Type: "None",
                Value: 0
            },
            ExpiryKind: expiry,
            EntryType: strike,


            StrikeParameter,

            InstrumentKind: optionType,

            LegReentrySLEnable: false,

            LegReentrySL: {
                Type: "None",
                Value: 1
            },

            LegReentryTPEnable: false,
            LegReentryTP: {
                Type: "None",
                Value: 1
            }
        }
        setLegItems([...legItems, legData]);

    }

    useEffect(() => {
        storeLegToLocal()
    }, [legItems])

    const storeLegToLocal = () => {
        const stringifyitems = JSON.stringify(legItems)
        localStorage.setItem("LEG", stringifyitems)
    }

    const handleDelete = (id) => {
        let itemUpdatedClone = legItems.filter(item => (item.id !== id))
        setLegItems(itemUpdatedClone)
    }

    const handleItems = (id, { target }) => {
        const { name, value } = target;
        console.log(name, value, target.type)
        if (target.type === "checkbox" && target.checked !== undefined) {
            console.log("heler")
            let toggleEnables = legItems.map(item => {
                if (item.id === id) {
                    console.log("val",item[name])
                    item[name] = !!target.checked;
                }
                return { ...item }
            })
            setLegItems([...toggleEnables]);
        } else {
            let itemUpdatedClone = legItems.map(item => {
                if (item.id === id) {
                //     if (item[name].hasOwnProperty("Type") && target.type === "select-one") {
                //         console.log("type")
                //         item[name].Type = value
                //     } else if (item[name].hasOwnProperty("Value") && target.type === "number") {

                //         if ( item[name].Value.hasOwnProperty("InstrumentMove") ) {

                //             console.log(target.dataset,"clicck",target)
                //             if ( target.dataset.name = "InstrumentMove" ) {
                //                 console.log("instr")
                                // item[name].Value[target.dataset.name] = value;
                //             } else {
                //               console.log(target)
                //             }
                //             console.log("yep",target.dataset)
                //         } else {
                //             console.log("nope")
                //         }
                             // item[name].Value = value
                //     } else {
                //         item[name] = value
                //     }
                  item[name] = value
                }
                return { ...item }
            })
            setLegItems([...itemUpdatedClone]);
        }
    }



    return (
        <Fragment>
            <div
                className="bg-[#F6F6F6] border-4-black mx-auto"
                style={{ width: "80%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                    <h2 className="font-bold">Legs</h2>
                    <button
                        style={{ opacity: legAdd ? "0.6" : "" }} className="font-bold text-xl text-[#375A9E]"
                        onClick={handleClick}>
                        + Add Leg
                    </button>
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
                                onClick={(e) => handleSubmit(e)}
                            >Add Leg</button>
                            <button className="px-14 py-1 bg-white text-[#375A9E] text-sm font-semibold rounded-full ml-2"
                                onClick={() => setLegAdd(false)}>Cancel</button>
                        </div>
                    </Fragment> : ""
                }
            </div>
            <LegList
                legItems={legItems}
                handleDelete={handleDelete}
                handleItems={handleItems}
            />
        </Fragment>
    )
}

export default Legs;