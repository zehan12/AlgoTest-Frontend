import { Fragment } from "react";
import LegCard from "./LegCard";



const LegList = ({ legItems, handleDelete, handleItems }) => {

    return (
        <Fragment>
            {legItems.map((leg) => <LegCard
                Lots={leg.Lots}
                positionType={leg.PositionType}
                instrumentKind={leg.InstrumentKind}
                expiryKind={leg.ExpiryKind}
                entryType={leg.EntryType}
                strikeParamemter={leg.StrikeParameter}
                legMomentumValue={leg.LegMomentum}
                legTargetValue={leg.LegTarget}
                legStopLossValue={leg.LegStopLoss}
                legTrailSLValue={leg.LegTrailSL}
                legReentryTPValue={leg.LegReentryTP}
                legReentrySLValue={leg.LegReentrySL}
                key={leg.id}
                id={leg.id}
                handleDelete={handleDelete}
                handleItems={handleItems}
            />)}
        </Fragment>
    )
} 

export default LegList;