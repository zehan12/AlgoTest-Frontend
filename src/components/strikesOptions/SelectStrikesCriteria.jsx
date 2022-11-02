import { Fragment } from "react"

const SelectStrikesCriteria = () => {
    return (
        <Fragment>
            <h4 className="text-l font-bold">Selcted Strike</h4>
            <select className="m-2 bg-[#375A9E] text-white text-xs font-semibold  border-x-4 border-[#375A9E] w-32 py-1 px-2 rounded-full" name="postion" value="Strike Type">
                <option value="Strike Type">Strike Type</option>
                <option value="Premium Range">Premium Range</option>
                <option value="Closest Premium">Closest Premium</option>
                <option value="Straddle Width">Straddle Width</option>
            </select>
        </Fragment>
    )
}

export default SelectStrikesCriteria;