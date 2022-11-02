const StrikeType = ( { strikeType, handleChange } ) => {
    return (
        <div>
            <h4 className="text-l font-bold">Strike Type</h4>
            <select className="m-3 text-xs w-18 px-2 rounded-full" name="strikeType" value={strikeType} onChange={(e)=>handleChange(e)}>
                <option value="ATM" >ATM</option>
                <Option val={"IMT"} />
                <Option val={"OTM"} />
            </select>
        </div>
    )
}

export default StrikeType;


const arrayOf20WithKey = (key) => {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
        arr.push(key + i);
    }
    return arr;
}

const Option = ({ val }) => {
    return (
        <>
            {arrayOf20WithKey(val).map((ele) => <option key={ele} value={ele}>{ele}</option>)}
        </>
    )
} 