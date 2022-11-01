import { Fragment } from "react"

const arrayOf20WithKey = (key) => {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
        arr.push(key + i);
    }
    return arr;
}

const LegCard = () => {
    return (
        <Fragment>
            <div className="bg-blue-200">
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
                    <h4 className="text-l font-bold">Selcted Strike</h4>
                    <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold  border-x-4 border-[#375A9E] w-32 py-1 px-2 rounded-full" name="postion" value="Strike Type">
                        <option value="Strike Type">Strike Type</option>
                        <option value="Premium Range">Premium Range</option>
                        <option value="Closest Premium">Closest Premium</option>
                        <option value="Straddle Width">Straddle Width</option>
                    </select>

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if  Strike Type select after an event
                    -----------------------------------------------------------------------------------------------------*/}

                    {/* <select className="my-2 bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="postion" value="ATM">
                        <option value="ATM" >ATM</option>
                        {
                            arrayOf20WithKey("ITM").map((ele) => <option key={ele} value={ele}>{ele}</option>)
                        }
                        {
                            arrayOf20WithKey("OTM").map((ele) => <option key={ele} value={ele}>{ele}</option>)
                        }
                    </select> */}

                    {/* -------------------------------------------------------------------------------------------------
                                           //! if  Preimum Range select after an event
                    -----------------------------------------------------------------------------------------------------*/}

                    {/* <div className="flex items-center">
                        <h4 className="text-sm font-bold">Lower</h4>
                        <input
                            className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                            type="number" min="1" value="50" />

                        <h4 className="text-sm font-bold">Upper</h4>
                        <input
                            className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-20"
                            type="number" min="1" value="200" />
                    </div> */}


                    {/* -------------------------------------------------------------------------------------------------
                                           //! if Closest Preimum select after an event
                    -----------------------------------------------------------------------------------------------------*/}
                    {/* <div className="flex items-center">
                        <h4 className="text-sm font-bold">Premium</h4>
                        <input
                            className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                            type="number" min="1" value="50" />
                    </div> */}


                    {/* -------------------------------------------------------------------------------------------------
                                           //! if Straddle Width select after an event
                    -----------------------------------------------------------------------------------------------------*/}
                    <div className="flex justify-center items-center text-xs font-semibold">
                        <h4><b>[</b> ATM Strike</h4>
                        <select className="h-6 mx-3 w-14 px-2 rounded-full text-sm border-x-4 border-white " name="postion" value="+">
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                        <b>(</b>

                        <input
                            className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                            type="number" min="1.5" value="1.5" />
                        <h4>
                            <b>x </b> ATM Straddle Price <b> )]</b>
                        </h4>
                    </div>

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
                                    className="text-sm m-3  rounded-full border-x-4 border-white  h-5 w-20"
                                    type="number" min="0" value="0" />
                            </div>
                        </div>
                    </div>


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
                                    className="text-sm m-3  rounded-full border-x-4 border-white  h-5 w-20"
                                    type="number" min="0" value="0" />
                            </div>
                        </div>
                    </div>


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