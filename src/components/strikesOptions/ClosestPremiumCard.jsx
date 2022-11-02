import { Fragment } from "react"

const ClosestPremiumCard = () => {
    return (

        <div className="flex items-center" >
            <h4 className="text-sm font-bold">Premium</h4>
            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                type="number" min="1" value="50" />
        </div >
    )
}

export default ClosestPremiumCard;