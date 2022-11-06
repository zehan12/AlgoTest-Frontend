const AddValueCard = (
    {
        id,
        componentName,
        name,
        handleEnableDisable,
        checkboxName,
        arrayOfOptions,
        handleValues,
        handleTypes,
        targetObj
    }
) => {

    return (
        <div className="m-1 p-1 py-3">
            <div className="flex items-center" >
                <input
                    className="h-[9px] w-[9px] accent-[#375A9E]"
                    type="checkbox" name={checkboxName} value={targetObj.Type !== "None"}
                    onChange={() => handleEnableDisable({
                        id,
                        name,
                        targetObj,
                        isChecked: targetObj.Type !== "None",
                        initialOption: arrayOfOptions[0].value
                    })}
                    checked={targetObj.Type !== "None"} />
                <h4 className="mx-2 text-sm">{componentName}</h4>
            </div>
            <div className={`flex  ${(targetObj.Type === "None") ? "opacity-75" : ""}`} >
                <select
                    disabled={targetObj.Type === "None"}
                    className="my-2  bg-[#375A9E] text-white text-xs font-semibold border-x-4 border-[#375A9E] w-20 py-1 px-2 rounded-full" name="LegMomentum" value={targetObj.Type}
                    onChange={(e) => handleTypes(id, e, targetObj)}
                >
                    {
                        arrayOfOptions.map((opt) => (
                            <option key={opt.val} value={opt.value}>{opt.label}
                                {opt.direction === "up" ? <>&uarr </> : opt.direction === "down" ? <>&darr;</> : ""
                                }
                            </option>
                        ))
                    }
                </select>
                <div>
                    <input
                        disabled={targetObj.Type === "None"}
                        className="text-sm m-3  rounded-full border-4 border-white  h-5 w-20"
                        type="number" min="0" value={targetObj.Value}
                        name={name}
                        onChange={(e) => handleValues(id, e, targetObj)} />
                </div>
            </div>
        </div>
    )
}


export default AddValueCard;