import { Fragment } from "react"

const LegList = ({legItems}) => {
    console.log(legItems)
    return (
        <Fragment>
            <h1>List && Store Here</h1>
            { legItems.map((leg)=><div key={leg.id}>{leg.id}</div>) }
        </Fragment>
    )
}

export default LegList;