import { Fragment } from "react";
import LegCard from "./LegCard";



const LegList = ({ legItems, handleDelete, handleItems }) => {

    return (
        <Fragment>
            <h1>List && Store Here</h1>
            {legItems.map((leg) => <LegCard
                Lots={leg.Lots}
                positionType={leg.PositionType}
                instrumentKind={leg.InstrumentKind}
                expiryKind={leg.ExpiryKind}
                entryType={leg.EntryType}
                strikeParamemter={leg.StrikeParameter}      
                
                legMomentumEnable={!!leg.legMomentumEnable}
                
                key={leg.id}
                id={leg.id}
                handleDelete={handleDelete}
                handleItems={handleItems}
            />)}
        </Fragment>
    )
}

export default LegList;