const StraddleWidthCard = () => {
    return (
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
    )
}

export default StraddleWidthCard;