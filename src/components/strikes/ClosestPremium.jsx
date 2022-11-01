const ClosestPremium = ({premium,handleChange}) => {
    return (
        <div>
            <h4 className="text-l font-bold">Premium</h4>
            <input
                className="border-black m-3 px-3 rounded-full h-5 w-14"
                type="number" min="1" value={premium} onChange={(e)=>handleChange(e)} />
        </div>
    )
}

export default ClosestPremium;