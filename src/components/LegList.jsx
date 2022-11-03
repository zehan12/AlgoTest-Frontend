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

                legMomentumEnable={leg.legMomentumEnable}
                legMomentumType={leg.LegMomentum.Type}
                legMomentumValue={leg.LegMomentum.Value}

                legTargetEnable={leg.LegTargetEnable}
                legTargetType={leg.LegTarget.Type}
                legTargetValue={leg.LegTarget.Value}

                LegStopLossEnable={leg.LegStopLossEnable}
                legStopLossType={leg.LegStopLoss.Type}
                legStopLossValue={leg.LegStopLoss.Value}


                legTrailSLEnable={leg.LegTrailSLEnable}
                legTrailSLValue={leg.LegTrailSL}
                // legTrailSLValue={leg.LegTrailSL.Value}


                // legReentryTPEnable={leg.LegReentryTPEnable}
                // legReentryTPType={leg.LegReentryTP.Type}
                // legReentryTPValue={leg.legReentryTP.Value}

                // legReentrySLEnable={leg.LegReentrySLEnable}
                // legReentrySLType={leg.LegReentryTP.Type}
                // legReentrySLValue={leg.LegReentry.Value}


                key={leg.id}
                id={leg.id}
                handleDelete={handleDelete}
                handleItems={handleItems}
            />)}
        </Fragment>
    )
}

export default LegList;