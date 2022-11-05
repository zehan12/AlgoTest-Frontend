import { Fragment, useState } from "react"
import ClosestPremiumCard from "./strikesOptions/ClosestPremiumCard";
import PremiumRangeCard from "./strikesOptions/PremiumRangeCard";
import SelectStrikesCriteria from "./strikesOptions/SelectStrikesCriteria";
import StraddleWidthCard from "./strikesOptions/StraddleWidthCard";
import StrikesTypes from "./strikesOptions/StrikesTypes";
import { FaRegCopy } from "react-icons/fa"
import { ImCross } from "react-icons/im"




const LegCard = ({
    id,
    handleDelete,
    handleItems,
    Lots,
    positionType,
    expiryKind,
    instrumentKind,
    entryType,
    strikeParamemter,

    legMomentumEnable,
    legMomentumValue,


    legTargetEnable,
    legTargetValue,

    legStopLossEnable,
    legStopLossValue,

    legTrailSLEnable,
    legTrailSLValue,

    legReentryTPEnable,
    legReentryTPValue,

    legReentrySLEnable,
    legReentrySLValue,

}) => {

    console.log(strikeParamemter)

    const handleTrailSl = (id, e) => {
        let clone = { ...legTrailSLValue }
        clone.Value[e.target.name] = +e.target.value
        console.log(clone)
        handleItems(id, { target: { name: "LegTrailSL", value: { ...clone } } })
    }

    const handleType = (id, e, targetObj) => {
        console.log(targetObj, e.target.name, "my function call")
        let clone = { ...legTrailSLValue };
        clone.Type = e.target.value
        handleItems(id, { target: { name: "LegTrailSL", value: { ...clone } } })
    }

    const handleTypes = (id, e, targetObj) => {
        let clone = { ...targetObj };
        clone.Type = e.target.value;
        handleItems(id, { target: { name: e.target.name, value: { ...clone } } })
    }

    const handleValues = (id, e, targetObj) => {
        let clone = { ...targetObj };
        clone.Value = +e.target.value;
        handleItems(id, { target: { name: e.target.name, value: { ...clone } } })
    }

    const [Type, setType] = useState(entryType)

    const handleEntry = ({ target }) => {
        const { value } = target
        setType(value)
    }

    const handleStrike = (id, value) => {
        let val = { target: { name: "StrikeParameter", value: value } };
        handleItems(id, val)
    }

    const handlePremiumRange = (id, lower, upper) => {
        console.log(id, lower, upper)
        let val = { target: { name: "StrikeParameter", value: { Lower: lower, Upper: upper } } }
        handleItems(id, val)
    }

    const handlePremium = (id, value) => {
        let val = { target: { name: "StrikeParameter", value: { Premium: value } } };
        handleItems(id, val)
    }

    const handleStraddle = (id, sign, value) => {
        console.log(id, sign, value)
        let val = { target: { name: "StrikeParameter", value: { Adjustment: sign, Multiplier: value } } }
        handleItems(id, val)
    }




    return (
        <Fragment>
            <div className="bg-[#EFEFEF] rounded-md m-auto my-6 relative" style={{ width: "80%" }}>
            <div className="flex flex-col absolute top-0 right-0 h-16 w-16 ml-2 pl-12 ">      
                <div 
                onClick={() => handleDelete(id)}
                className="p-2 bg-red-400 border rounded-full h-7 w-7 text-white">
                    <ImCross size={10}/>
                </div>
                <div className="mt-3 p-1 bg-white text-blue-300 border rounded-full h-7 w-7">
                    <FaRegCopy />
                </div>
            </div>
                {/* <div onClick={() => handleDelete(id)}className="bg-red-600 text-xs  w-40">{id}</div> */}

                <div className="flex flex-wrap justify-center items-baseline pt-5">
                    <h4 className="font-bold">
                        Lots:
                    </h4>
                    <input
                        className="border-black m-3 px-3 rounded-full h-5 w-14"
                        type="number" min="1"
                        name="Lots"
                        value={Lots}
                        onChange={(e) => handleItems(id, e)} />
                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-18 py-1 px-2 rounded-full"
                        name="PositionType" value={positionType}
                        onChange={(e) => handleItems(id, e)}
                    >
                        <option value="Sell">Sell</option>
                        <option value="Buy">Buy</option>
                    </select>

                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold  border-x-4 border-[#375A9E] w-18 py-1 px-2 rounded-full" name="ExpiryKind" value={expiryKind} onChange={(e) => handleItems(id, e)}>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>

                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold  border-x-4 border-[#375A9E] w-18 py-1 px-2 rounded-full" name="InstrumentKind" value={instrumentKind} onChange={(e) => handleItems(id, e)}>
                        <option value="Call">Call</option>
                        <option value="Buy">Buy</option>
                    </select>


                    <SelectStrikesCriteria
                        entryType={entryType}
                        id={id}
                        handleItems={handleItems}
                        handleEntry={handleEntry}
                    />

                    {
                        Type === "Strike Type" ?
                            <StrikesTypes
                                id={id}
                                handleStrike={handleStrike}
                                strikeParamemter={strikeParamemter}
                            /> :
                            Type === "Premium Range" ?
                                <PremiumRangeCard
                                    id={id}
                                    handlePremiumRange={handlePremiumRange}
                                    strikeParamemter={strikeParamemter}
                                /> :
                                Type === "Closest Premium" ?
                                    <ClosestPremiumCard
                                        id={id}
                                        handlePremium={handlePremium}
                                        strikeParamemter={strikeParamemter}
                                    /> :
                                    Type === "Straddle Width" ?
                                        <StraddleWidthCard
                                            id={id}
                                            strikeParamemter={strikeParamemter}
                                            handleStraddle={handleStraddle}
                                        />
                                        : ""

                    }

                </div>



                <div className="flex flex-wrap justify-evenly px-10">


                    <div className="m-1 p-1 py-3">
                        <div className="flex items-center" >
                            <input 
                            className="h-[9px] w-[9px] accent-[#375A9E]"
                            type="checkbox" name="LegMomentumEnable" value={!!legMomentumEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2 text-sm">Simple Momentum</h4>
                        </div>
                        <div className={`flex  ${!legMomentumEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!legMomentumEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegMomentum" value={legMomentumValue.Type}
                                onChange={(e) => handleTypes(id, e, legMomentumValue)}
                            >
                                <option value="PointsUp">Points &uarr;</option>
                                <option value="PointsDown">Points &darr;</option>
                                <option value="PremiumRangeUp">Premium Range  &uarr;</option>
                                <option value="PremiumRangeDown">Premium Range  &darr;</option>
                                <option value="UnderlyingPointsUp">Underlying Points &uarr;</option>
                                <option value="UnderlyingPointsDown">Underlying Points &darr;</option>
                                <option value="UnderlyingPointsPremiumUp">Underlying Points Premium &uarr;</option>
                                <option value="UnderlyingPointsPremiumDown">Underlying Points Premium &darr;</option>
                            </select>
                            <div>
                                <input
                                    disabled={!legMomentumEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legMomentumValue.Value}
                                    name="LegMomentum"
                                    onChange={(e) => handleValues(id, e, legMomentumValue)} />
                            </div>
                        </div>
                    </div>



                    <div className="m-1 p-1 py-3">
                        <div className="flex items-center" >
                            <input 
                            className="h-[9px] w-[9px] accent-[#375A9E]"
                            type="checkbox" name="LegTargetEnable" value={!!legTargetEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2 text-sm">Target Profit</h4>
                        </div>
                        <div className={`flex  ${!legTargetEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!legTargetEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegTarget" value={legTargetValue.Type}
                                onChange={(e) => handleTypes(id, e, legTargetValue)}
                            >
                                <option value="Points">Points</option>
                                <option value="UnderlyingPoints">Underlying Points</option>
                                <option value="Percentage">Precentage</option>
                                <option value="UnderlyingPercentage">Underlying Precentage;</option>
                            </select>
                            <div>
                                <input
                                    disabled={!legTargetEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legTargetValue.Value}
                                    name="LegTarget"
                                    onChange={(e) => handleValues(id, e, legTargetValue)} />
                            </div>
                        </div>
                    </div>



                    <div className="m-1 p-1 py-3">
                        <div className="flex items-center" >
                            <input 
                            className="h-[9px] w-[9px] accent-[#375A9E]"
                            type="checkbox" name="LegStopLossEnable" value={!!legStopLossEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2 text-sm">Stop Loss</h4>
                        </div>
                        <div className={`flex  ${!legStopLossEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!legStopLossEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegStopLoss" value={legStopLossValue.Type}
                                onChange={(e) => handleTypes(id, e, legStopLossValue)}
                            >
                                <option value="Points">Points</option>
                                <option value="UnderlyingPoints">Underlying Points</option>
                                <option value="Percentage">Precentage</option>
                                <option value="UnderlyingPercentage">Underlying Precentage;</option>
                            </select>
                            <div>
                                <input
                                    disabled={!legStopLossEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legStopLossValue.Value}
                                    name="LegStopLoss"
                                    onChange={(e) => handleValues(id, e, legStopLossValue)} />
                            </div>
                        </div>
                    </div>

                    <div className="m-1 p-1 py-3  flex-col">
                        <div className="flex items-center">
                            <input 
                            className="h-[9px] w-[9px] accent-[#375A9E]"
                            type="checkbox" name="LegTrailSLEnable" value={!!legTrailSLEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2 text-sm">Trail SL</h4>
                        </div>
                        <div className={`flex  ${!legTrailSLEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!legTrailSLEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegTrailSL" value={legTrailSLValue.Type}
                                onChange={(e) => handleType(id, e)}
                            >
                                <option value="Points">Points</option>
                                <option value="Premium">Premium</option>

                            </select>
                            <div>
                                <input
                                    disabled={!legTrailSLEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legTrailSLValue.Value.instrumentMove}
                                    name="InstrumentMove"
                                    onChange={(e) => handleTrailSl(id, e)} />
                            </div>
                            <div>
                                <input
                                    disabled={!legTrailSLEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legTrailSLValue.Value.StopLossMove}
                                    name="StopLossMove"
                                    onChange={(e) => handleTrailSl(id, e)} />
                            </div>
                        </div>
                    </div>



                    <div className="m-1 p-1 py-3">
                        <div className="flex items-center" >
                            <input 
                            className="h-[9px] w-[9px] accent-[#375A9E]"
                            type="checkbox" name="LegReentryTPEnable" value={!!legReentryTPEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2 text-sm">Re-entry on Tgt</h4>
                        </div>
                        <div className={`flex  ${!legReentryTPEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!legReentryTPEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegReentryTP" value={legReentryTPValue.Type}
                                onChange={(e) => handleTypes(id, e, legReentryTPValue)}
                            >
                                <option value="ASAP">RE ASAP</option>
                                <option value="ASAPReverse">RE ASAP </option>
                                <option value="Momentum">RE MOMENTUM</option>
                                <option value="MomentumReverse">RE MOMENTUM</option>
                                <option value="COST">RE COST</option>
                                <option value="COSTReverse">RE COST </option>
                            </select>
                            <div>
                                <input
                                    disabled={!legReentryTPEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legReentryTPValue.Value}
                                    name="LegReentryTP"
                                    onChange={(e) => handleValues(id, e, legReentryTPValue)} />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex justify-center md:flex-auto ">
                    <div className="m-1 p-1 py-3">
                        <div className="flex items-center">
                            <input 
                            className="h-[9px] w-[9px] accent-[#375A9E]"
                            type="checkbox" name="LegReentrySLEnable" value={!!legReentrySLEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2 text-sm">Re-entry on SL</h4>
                        </div>
                        <div className={`flex  ${!legReentrySLEnable} ? "opacity-75" : ""}`} >

                            <select
                                disabled={!legReentrySLEnable}
                                className="my-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" value={legReentrySLValue.Type}
                                name="LegReentrySL"
                                onChange={(e) => handleTypes(id, e, legReentrySLValue)}
                            >
                                <option value="ASAP">RE ASAP</option>
                                <option value="ASAPReverse">RE ASAP </option>
                                <option value="Momentum">RE MOMENTUM</option>
                                <option value="MomentumReverse">RE MOMENTUM</option>
                                <option value="COST">RE COST</option>
                                <option value="COSTReverse">RE COST </option>
                            </select>
                            <div>
                                <input
                                    disabled={!legReentrySLEnable}
                                    className="text-sm m-3  px-3 rounded-full borderbo-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legReentrySLValue.Value}
                                    name="LegReentrySL"
                                    onChange={(e) => handleValues(id, e, legReentrySLValue)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}


export default LegCard;
