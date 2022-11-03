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

                legMomentumEnable={leg.LegMomentumEnable}
                legMomentumValue={leg.LegMomentum}

                legTargetEnable={leg.LegTargetEnable}
                legTargetValue={leg.LegTarget}

                legStopLossEnable={leg.LegStopLossEnable}
                legStopLossValue={leg.LegStopLoss}


                legTrailSLEnable={leg.LegTrailSLEnable}
                legTrailSLValue={leg.LegTrailSL}


                legReentryTPEnable={leg.LegReentryTPEnable}
                legReentryTPValue={leg.LegReentryTP}

                legReentrySLEnable={leg.LegReentrySLEnable}
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