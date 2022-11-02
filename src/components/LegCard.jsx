import { Fragment } from "react"
import ClosestPremiumCard from "./strikesOptions/ClosestPremiumCard";
import PremiumRangeCard from "./strikesOptions/PremiumRangeCard";
import SelectStrikesCriteria from "./strikesOptions/SelectStrikesCriteria";
import StraddleWidthCard from "./strikesOptions/StraddleWidthCard";
import StrikesTypes from "./strikesOptions/StrikesTypes";



const LegCard = ( { id , handleDelete } ) => {
    return (
        <Fragment>
            <div onClick={()=>handleDelete(id)} className="bg-red-600">{id}</div>
            <div className="bg-[#EFEFEF] rounded-md m-auto my-6" style={{ width: "80%" }}>
                <div className="flex justify-center items-baseline">
                    <h4 className="font-bold">
                        Lots:
                    </h4>
                    <input
                        className="border-black m-3 px-3 rounded-full h-5 w-14"
                        type="number" min="1" value="1" />
                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-18 py-1 px-2 rounded-full" name="postion" value="Sell">
                        <option value="Sell">Sell</option>
                        <option value="Buy">Buy</option>
                    </select>

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if any option selected
                    -----------------------------------------------------------------------------------------------------*/}
                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold  border-x-4 border-[#375A9E] w-18 py-1 px-2 rounded-full" name="postion" value="Weekly">
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>

                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold  border-x-4 border-[#375A9E] w-18 py-1 px-2 rounded-full" name="postion" value="Call">
                        <option value="Call">Call</option>
                        <option value="Buy">Buy</option>
                    </select>

                    {/* -------------------------------------------------------------------------------------------------
                                           //! select Types will enable further rendering
                    -----------------------------------------------------------------------------------------------------*/}

                    <SelectStrikesCriteria />

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if  Strike Type select after an event
                    -----------------------------------------------------------------------------------------------------*/}

                    <StrikesTypes />

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if  Preimum Range select after an event
                    -----------------------------------------------------------------------------------------------------*/}

                    <PremiumRangeCard />

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if Closest Preimum select after an event
                    -----------------------------------------------------------------------------------------------------*/}

                    <ClosestPremiumCard />

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if Straddle Width select after an event     
                    -----------------------------------------------------------------------------------------------------*/}

                    <StraddleWidthCard />

                </div>



                <div className="flex justify-evenly px-10">


                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <h4 className="mx-2">Simple Momentum</h4>
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
                                    className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                                    type="number" min="0" value="0" />
                            </div>
                        </div>
                    </div>



                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <h4 className="mx-2">Target Profit</h4>
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


                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <h4 className="mx-2">Stop Loss</h4>
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


                    <div className="border-2 border-black m-2 p-5">
                        <div className="flex items-center">
                            <input type="checkbox" />
                            <h4 className="mx-2">Trail SL</h4>
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
                            <div>
                                <input
                                    className="text-sm m-3  px-3 rounded-full borderbo-4 border-white  h-5 w-20"
                                    type="number" min="0" value="0" />
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