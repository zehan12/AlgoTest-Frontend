import { Fragment } from "react";
const StraddleWidth = ( { handleChange, plusMinus, multiplier } ) => {
    return (
        <Fragment>
            <div className="my-4 py-2 mx-2 flex justify-center">
                <div className="flex">
                    <h4><b>[</b> ATM Strike</h4>
                    <select className="h-6 mx-3 text-xs w-14 px-2 rounded-full" name="plusMinus" value={plusMinus} 
                        onChange={(e)=>handleChange(e)}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <b>(</b>
                </div>
                <div className="flex justify-center align-middle">
                    <input
                        className="border-black mx-1 pt-1 px-3 rounded-full h-6 w-16"
                        type="number" min="1.5" value={multiplier} name="multiplier"
                        onChange={(e)=>handleChange(e)}
                        />
                    <h4>
                        <b>x </b> ATM Straddle Price <b> )]</b>
                    </h4>
                </div>
            </div>
        </Fragment>
    )
}

export default StraddleWidth;