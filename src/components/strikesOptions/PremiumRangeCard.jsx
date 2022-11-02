const PremiumRangeCard = () => {
    return (
        <div className="flex items-center">
            <h4 className="text-sm font-bold">Lower</h4>
            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-14"
                type="number" min="1" value="50" />

            <h4 className="text-sm font-bold">Upper</h4>
            <input
                className="border-black text-sm  m-3 py-1 px-3 rounded-full h-5 w-20"
                type="number" min="1" value="200" />
        </div>
    )
}

export default PremiumRangeCard;