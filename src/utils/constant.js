const STRIKE_VALUE = {
    strikeType: "Strike Type",
    premiumRange: "Premium Range",
    closestPremium: "Closest Premium",
    straddleWidth: "Straddle Width"
}

const INITIAL = {
    type:"None",
    position:"Sell",
    optionType:"Call",
    expiry:"Weekly",
    strike:"Strike Type",
    strikeType:"ATM"
}

const PROPERTIES = {
    totalLot: "totalLot",
    position: "position",
    optionType: "optionType",
    expiry: "expiry",
    strike: "strike",
    strikeType: "strikeType",
    premium: "premium",
    upper: "upper",
    lower: "lower",
    plusMinus: "plusMinus",
    multiplier: "multiplier"
}

const simpleMomentumOptions = [
    {
        label: "Points",
        value: "PointsUp",
        direction: "up",
    },
    {
        label: "Points &darr",
        value: "PointsDown",
        direction: "down",
    },
    {
        label: "Premium Range &Uarr",
        value: "PremiumRangeUp",
        direction: "up",
    },
    {
        label: "Premium Range &darr",
        value: "PremiumRangeDown",
        direction: "down",
    },
    {
        label: "Underlying Points &uarr",
        value: "UnderlyingPointsUp",
        direction: "up",
    },
    {
        label: "Underlying Points &darr",
        value: "UnderlyingPointsDown",
        direction: "down",

    },
    {
        label: "Underlying Points Premium &uarr",
        value: "UnderlyingPointsPremiumUp",
        direction: "up",
    },
    {
        label: "Underlying Points Premium &darr",
        value: "UnderlyingPointsPremiumDown",
        direction: "down",
    }
]


const targetProfitAndStopLossOptions = [
    {
        label: "Points",
        value: "Points",
        direction: "none",
    },
    {
        label: "Underlying Points",
        value: "UnderlyingPoints",
        direction: "none",
    },
    {
        label: "Percentage",
        value: "Percentage",
        direction: "none",
    },
    {
        label: "Underlying Percentage",
        value: "UnderlyingPercentage",
        direction: "none",

    },
]


const reEntryArray = [
    {
        value: "ASAP", label: "RE ASAP", direction: "none",
    },
    {
        value: "ASAPReverse", label: "RE ASAP", direction: "reverse",
    },
    {
        value: "Momentum", label: "RE MOMENTUM", direction: "none",
    },
    {
        value: "MomentumReverse", label: "RE MOMENTUM", direction: "reverse",
    },
    {
        value: "COST", label: "RE COST", direction: "none"
    },
    {
        value: "COSTReverse", label: "RE COST", direction: "reverse"
    },
]


export {
    STRIKE_VALUE,
    INITIAL,
    PROPERTIES,
    simpleMomentumOptions,
    targetProfitAndStopLossOptions,
    reEntryArray
}