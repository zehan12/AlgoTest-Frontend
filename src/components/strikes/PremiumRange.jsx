import { Fragment } from "react";
const PremiumRange = ( { handleChange, lower, upper } ) => {
    return (
        <Fragment>
            <div>
                <h4 className="text-l font-bold">Lower Range</h4>
                <input
                    className="border-black m-3 px-4 rounded-full h-5 w-20"
                    onChange={(e)=>handleChange(e)}
                    type="number" min="1" value={lower}
                    name="lower"
                    />
            </div>
            <div>
                <h4 className="text-l font-bold">Upper Range</h4>
                <input
                    className="border-black m-3 px-4 rounded-full h-5 w-20"
                    onChange={(e)=>handleChange(e)}
                    type="number" min="1" value={upper}
                    name="upper"
                    />
            </div>
        </Fragment>
    )
}

export default PremiumRange;