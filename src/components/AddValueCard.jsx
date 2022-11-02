const AddValueCard = () => {
    return (
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
    )
}

export default AddValueCard;