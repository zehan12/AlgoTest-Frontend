import { Fragment, useState, useEffect } from "react"
import LegList from "./LegList";
import Segment from "./Segment";

import { db } from "../firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import LegCard from "./LegCard";



const Legs = () => {


    const legsCollectionRef = collection(db, "legs");

     //! add legItems in state
     const [legItems, setLegItems] = useState([])
    // const [legItems, setLegItems] = useState(JSON.parse(localStorage.getItem("LEG")) || [])

    const fetchLegs = async () => {
        const data = await getDocs(legsCollectionRef);
        data.docs.forEach((doc)=>console.log({...doc.data(),id:doc.id}))
        setLegItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    useEffect(() => {

        // fetchLegs()
        // fetchData()
    }, [])


    // const fetchData = async () => {
    //     const res = await fetch("https://algotest-61f5c-default-rtdb.asia-southeast1.firebasedatabase.app/legs.json");

    //     const data = await res.json();
    //     console.log(data, "from fetch fuction")
    // }

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        let StrikeParameter = strike === "Strike Type" ? strikeType :
            strike === "Premium Range" ? { Lower: lower, Upper: upper } :
                strike === "Closest Premium" ? { Premium: premium } :
                    strike === "Straddle Width" ? { Adjustment: plusMinus, Multiplier: multiplier } : ""

        const legData = {
            id: Date.now(),
            PositionType: position,
            Lots: totalLeg,

            LegStopLossEnable: false,

            LegStopLoss: {
                Type: "None",
                Value: 0,
            },

            LegTargetEnable: false,

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

            LegMomentumEnable: false,

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


        const res = await addDoc(legsCollectionRef, {
            createId: Date.now(), PositionType: position, Lots: totalLeg,
            ExpiryKind: expiry, EntryType: strike, StrikeParameter, InstrumentKind: optionType,
            LegStopLossEnable: false, LegStopLoss: { Type: "None", Value: 0, },
            LegTargetEnable: false, LegTarget: { Type: "None", Value: 0, },
            LegTrailSLEnable: false, LegTrailSL: { Type: "None", Value: { InstrumentMove: 0, StopLossMove: 0, } },
            LegMomentumEnable: false, LegMomentum: { Type: "None", Value: 0 },
            LegReentrySLEnable: false, LegReentrySL: { Type: "None", Value: 1 },
            LegReentryTPEnable: false, LegReentryTP: { Type: "None", Value: 1 }
        });


        fetchLegs();

        // const res = await fetch("https://algotest-61f5c-default-rtdb.asia-southeast1.firebasedatabase.app/legs.json",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(legData)
        //     }
        // );
    }

    // useEffect(() => {
    //     storeLegToLocal()
    // }, [legItems])

    // const storeLegToLocal = () => {
    //     const stringifyitems = JSON.stringify(legItems)
    //     localStorage.setItem("LEG", stringifyitems)
    // }



    const handleDelete = async(id) => {
        const legDoc = doc(db, "legs", id );
        await deleteDoc(legDoc);
        fetchLegs()
        // let itemUpdatedClone = legItems.filter(item => (item.id !== id))
        // setLegItems(itemUpdatedClone)
    }

    const handleItems = (id, { target }) => {
        const { name, value } = target;
        console.log(name, value, target.type)
        if (target.type === "checkbox" && target.checked !== undefined) {
            console.log("heler")
            let toggleEnables = legItems.map(item => {
                if (item.id === id) {
                    console.log("val", item[name])
                    item[name] = !!target.checked;
                }
                return { ...item }
            })
            setLegItems([...toggleEnables]);
        } else {
            let itemUpdatedClone = legItems.map(item => {
                if (item.id === id) {
                    item[name] = value
                }
                return { ...item }
            })
            setLegItems([...itemUpdatedClone]);
        }
    }


    const updateleg = async (id, {target}) => {
        const { name, value } = target;
        const legDoc = doc(db, "legs", id);
        const newFields = { name: value };
        await updateDoc(legDoc, newFields);
      };

    return (
        <Fragment>
            <div
                className="border-4-black mx-auto"
                style={{ width: "80%" }}>
                <div className="flex justify-between px-7 pb-1 pt-7 border-b-[1px]" >
                    <h2 className="font-bold">Legs</h2>
                    <button
                     className={`font-bold text-l text-[#375A9E] ${ legAdd ? "opacity-[.2]" : ""}`}
                        onClick={handleClick}>
                        + Add Leg{legAdd}
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
                        <div className="p-4 bg-[#F6F6F6]" >
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
                legItems={legItems || [ {
                    createId: Date.now(), PositionType: position, Lots: totalLeg,
                    ExpiryKind: expiry, EntryType: strike, StrikeParameter:"ATM", InstrumentKind: optionType,
                    LegStopLossEnable: false, LegStopLoss: { Type: "None", Value: 0, },
                    LegTargetEnable: false, LegTarget: { Type: "None", Value: 0, },
                    LegTrailSLEnable: false, LegTrailSL: { Type: "None", Value: { InstrumentMove: 0, StopLossMove: 0, } },
                    LegMomentumEnable: false, LegMomentum: { Type: "None", Value: 0 },
                    LegReentrySLEnable: false, LegReentrySL: { Type: "None", Value: 1 },
                    LegReentryTPEnable: false, LegReentryTP: { Type: "None", Value: 1 }
                } ]}
                handleDelete={handleDelete}
                handleItems={handleItems}
            />
        </Fragment>
    )
}

export default Legs;