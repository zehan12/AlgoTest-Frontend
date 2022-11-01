# Task
## Phase 1
 
### Visit algotest.in/backtest
# And emulate the Leg builder feature in React
# Upon Clicking Add leg the leg should appear as list below it
# Now the leg can be configured to add more options like shown in the screenshot above. You need not emulate all the features, just Simple
# Momentum and Trail SL is sufficient.
# Notice the copy and delete button. You have to create that as well.
# Have a final submit button, clicking which all the legs that have been added should appear as list of json object, where each element represent a leg.
# Representation of a leg is as shown below.

```js 
{
"PositionType": "PositionType.Sell" or “PositionType.Buy”,
"Lots": 1 //integer,
"LegStopLoss": {
"Type": //"LegTgtSLType.Percentage" or “LegTgtSLType.Points” or
"LegTgtSLType.UnderlyingPercentage" and so on,
"Value": 40 //number
},
"LegTarget": {
"Type": //Same as Leg Stop Loss type above,
"Value": 30 //number
},
"LegTrailSL": {
"Type": "None" if not selected or “TrailStopLossType.Points” or
“TrailStopLossType.Percentage”,
"Value": {
“InstrumentMove”: //number
“StopLossMove”: //number
}
},
"LegMomentum": {
"Type": "None" or “MomentumType.PointsUp” or “MomentumType.
PointsDown” or so on,
"Value": //number
},
"ExpiryKind": "ExpiryType.Weekly" or “ExpiryType.Monthly”,
"EntryType": "EntryType.EntryByStrikeType",
"StrikeParameter": "StrikeType.ATM" or “StrikeType.OTM1” when
EntryByStrikeType, or //number when EntryByPremium, object as {“Lower”:
//number, “Upper”: //number} when EntryByPremiumRange, object as
{“Adjustment”: “Plus” or “Minus”, “Multiplier”: //number} when
EntryByStraddleWidth,
"InstrumentKind": "LegType.CE",
"LegReentrySL": {
"Type": "ReentryType.ASAP" or "ReentryType.ASAPReverse",
"Value": 0 //integer
},
"LegReentryTP": {
"Type": //Same as above,
"Value": 1
}

},
```

## Phase 2:
### Start a simple firebase project and store the list you are generating in the last phase in that project with API calls.
### Make a simple fetch button to retrieve the list from firebase and display the list in your react app.
