import { Fragment } from "react";
import LegCard from "./LegCard";



const LegList = ({ legItems, handleDelete, handleItems, handleCreateCopy }) => {

    return (
        <Fragment>
            {legItems.map((leg) => <LegCard
                key={leg.id}
                Lots={leg.Lots}
                positionType={leg.PositionType}
                instrumentKind={leg.InstrumentKind}
                expiryKind={leg.ExpiryKind}
                entryType={leg.EntryType}
                strikeParamemter={leg.StrikeParameter}
                legMomentumValue={leg.LegMomentum}
                legTargetValue={leg.LegTarget}
                legStopLossValue={leg.LegStopLoss}

                legTrailSLEnable={leg.LegTrailSLEnable}

                legTrailSLValue={leg.LegTrailSL}
                legReentryTPValue={leg.LegReentryTP}
                legReentrySLValue={leg.LegReentrySL}
                id={leg.id}
                handleDelete={handleDelete}
                handleItems={handleItems}
                handleCreateCopy={handleCreateCopy}
            />)}
        </Fragment>
    )
}

export default LegList;