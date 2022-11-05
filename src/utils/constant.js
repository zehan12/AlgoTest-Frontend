const simpleMomentumOptions = [
    {
        label: "Points",
        value: "PointsUp",
        direction: true
    },
    {
        label: "Points &darr",
        value: "PointsDown"
    },
    {
        label: "Premium Range &Uarr",
        value: "PremiumRangeUp"
    },
    {
        label: "Premium Range &darr",
        value: "PremiumRangeDown"
    },
    {
        label: "Underlying Points &uarr",
        value: "UnderlyingPointsUp"
    },
    {
        label: "Underlying Points &darr",
        value: "UnderlyingPointsDown",
    },
    {
        label: "Underlying Points Premium &uarr",
        value: "UnderlyingPointsPremiumUp"
    },
    {
        label: "Underlying Points Premium &darr",
        value: "UnderlyingPointsPremiumDown",
    }
]


const targetProfitAndStopLossOptions = [
    {
        label: "Points",
        value: "Points",
    },
    {
        label: "Underlying Points",
        value: "UnderlyingPoints"
    },
    {
        label: "Percentage",
        value: "Percentage"
    },
    {
        label: "Underlying Percentage",
        value: "UnderlyingPercentage"
    },
]


const reEntryArray = [
    { value: "ASAP", label: "RE ASAP" },
    { value: "ASAPReverse", label: "RE ASAP" },
    { value: "Momentum", label: "RE MOMENTUM" },
    { value: "MomentumReverse", label: "RE MOMENTUM" },
    { value: "COST", label: "RE COST" },
    { value: "COSTReverse", label: "RE COST " },
]


export {
    simpleMomentumOptions,
    targetProfitAndStopLossOptions,
    reEntryArray
}