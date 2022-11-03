import { Fragment, useState } from "react"
import ClosestPremiumCard from "./strikesOptions/ClosestPremiumCard";
import PremiumRangeCard from "./strikesOptions/PremiumRangeCard";
import SelectStrikesCriteria from "./strikesOptions/SelectStrikesCriteria";
import StraddleWidthCard from "./strikesOptions/StraddleWidthCard";
import StrikesTypes from "./strikesOptions/StrikesTypes";



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
    legMomentumType,
    legMomentumValue,


    legTargetEnable,
    legTargetType,
    legTargetValue,

    LegStopLossEnable,
    legStopLossType,
    legStopLossValue,

    legTrailSLEnable,
    legTrailSLValue,

}) => {
    // console.log(legMomentumType,legMomentumValue,legMomentumEnable,"now");

    const handleTrailSl = (id, e) => {
        let clone = { ...legTrailSLValue }
        clone.Value[e.target.name] = +e.target.value
        console.log(clone)
        handleItems(id, { target: { name: "LegTrailSL", value: { ...clone } } })
    }

    const handleType = ( id, e ) => {
        let clone = { ...legTrailSLValue };
        clone.Type = e.target.value
        handleItems(id,{target:{name:"LegTrailSL", value:{...clone}}})
    }

    const [Type, setType] = useState(entryType)
    const handleEntry = ({ target }) => {
        const { value } = target
        setType(value)
    }
    return (
        <Fragment>
            <div onClick={() => handleDelete(id)} className="bg-red-600">{id}</div>
            <div className="bg-[#EFEFEF] rounded-md m-auto my-6" style={{ width: "80%" }}>
                <div className="flex justify-center items-baseline">
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

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if any option selected
                    -----------------------------------------------------------------------------------------------------*/}
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
                                handleItems={handleItems}
                                strikeParamemter={strikeParamemter}
                            /> :
                            Type === "Premium Range" ?
                                <PremiumRangeCard
                                    id={id}
                                    handleItems={handleItems}
                                    strikeParamemter={strikeParamemter}
                                /> :
                                Type === "Closest Premium" ?
                                    <ClosestPremiumCard
                                        id={id}
                                        handleItems={handleItems}
                                        strikeParamemter={strikeParamemter}
                                    /> :
                                    Type === "Straddle Width" ?
                                        <StraddleWidthCard
                                            id={id}
                                            handleItems={handleItems}
                                            strikeParamemter={strikeParamemter}
                                        />
                                        : ""

                    }

                </div>



                <div className="flex justify-evenly px-10">


                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center" >
                            <input type="checkbox" name="legMomentumEnable" value={!!legMomentumEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2">Simple Momentum</h4>
                        </div>
                        <div className={`flex  ${!legMomentumEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!legMomentumEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegMomentum" value={legMomentumType}
                                onChange={(e) => handleItems(id, e)}
                            >
                                <option value="Points up">Points &uarr;</option>
                                <option value="Points down">Points &darr;</option>
                                <option value="Premium Range up">Premium Range  &uarr;</option>
                                <option value="Premium Range down">Premium Range  &darr;</option>
                                <option value="Underlying Points up">Underlying Points &uarr;</option>
                                <option value="Underlying Points down">Underlying Points &darr;</option>
                                <option value="Underlying Points Premium up">Underlying Points Premium &uarr;</option>
                                <option value="Underlying Points Premium down">Underlying Points Premium &darr;</option>
                            </select>
                            <div>
                                <input
                                    disabled={!legMomentumEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legMomentumValue}
                                    name="LegMomentum"
                                    onChange={(e) => handleItems(id, e)} />
                            </div>
                        </div>
                    </div>



                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center" >
                            <input type="checkbox" name="legTargetEnable" value={legTargetEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2">Target Profit</h4>
                        </div>
                        <div className={`flex  ${legTargetEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={legTargetEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegTarget" value={legTargetType}
                                onChange={(e) => handleItems(id, e)}
                            >
                                <option value="Points">Points</option>
                                <option value="Underlying Points">Underlying Points</option>
                                <option value="Percentage">Precentage</option>
                                <option value="Underlying Percentage">Underlying Precentage;</option>
                            </select>
                            <div>
                                <input
                                    disabled={legTargetEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legTargetValue}
                                    name="LegTarget"
                                    onChange={(e) => handleItems(id, e)} />
                            </div>
                        </div>
                    </div>



                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center" >
                            <input type="checkbox" name="LegStopLossEnable" value={!!LegStopLossEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2">Stop Loss</h4>
                        </div>
                        <div className={`flex  ${!LegStopLossEnable ? "opacity-75" : ""}`} >
                            <select
                                disabled={!LegStopLossEnable}
                                className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegStopLoss" value={legStopLossType}
                                onChange={(e) => handleItems(id, e)}
                            >
                                <option value="Points">Points</option>
                                <option value="Underlying Points">Underlying Points</option>
                                <option value="Percentage">Precentage</option>
                                <option value="Underlying Percentage">Underlying Precentage;</option>
                            </select>
                            <div>
                                <input
                                    disabled={!LegStopLossEnable}
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value={legStopLossValue}
                                    name="LegStopLoss"
                                    onChange={(e) => handleItems(id, e)} />
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center" >
                            <input type="checkbox" name="LegTrailSLEnable" value={!!legTrailSLEnable} onChange={(e) => { handleItems(id, e) }} />
                            <h4 className="mx-2">Trail SL</h4>
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
                                    type="number" min="0" data-k="InstrumetntMove" value={legTrailSLValue.Value.instrumentMove}
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


                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <h4 className="mx-2">Re-entry on Tgt</h4>
                        </div>
                        <div className="flex">

                            <select className="my-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="postion" value="ATM">
                                <option value="Strike Type">Strike Type</option>
                                <option value="Premium Range">Premium Range</option>
                                <option value="Closest Premium">Closest Premium</option>
                                <option value="Straddle Width">Straddle Width</option>
                            </select>
                            <div>
                                <input
                                    className="text-sm m-3  rounded-full border-x-4 border-white  h-5 w-20"
                                    type="number" min="0" value="0" />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex justify-center">
                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <h4 className="mx-2">Re-entry on SL</h4>
                        </div>
                        <div className="flex">

                            <select className="my-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="postion" value="ATM">
                                <option value="Strike Type">Strike Type</option>
                                <option value="Premium Range">Premium Range</option>
                                <option value="Closest Premium">Closest Premium</option>
                                <option value="Straddle Width">Straddle Width</option>
                            </select>
                            <div>
                                <input
                                    className="text-sm m-3  px-3 rounded-full borderbo-4 border-white  h-5 w-20"
                                    type="number" min="0" value="0" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}


export default LegCard;