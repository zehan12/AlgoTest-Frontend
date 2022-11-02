import { Fragment } from "react";
import LegCard from "./LegCard";


const LegList = ({legItems, handleDelete}) => {
  
    return (
        <Fragment>
            <h1>List && Store Here</h1>
            { legItems.map((leg)=><LegCard key={leg.id} id={leg.id} handleDelete={handleDelete} />) }
        </Fragment>
    )
}

export default LegList;