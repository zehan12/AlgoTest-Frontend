import { Fragment, useState } from "react"

const arrayOf20WithKey = (key) => {
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(key + i);
  }
  return arr;
}

const Segment = ( { handleChange, totalLeg } ) => {
  const [selected, setSelected] = useState("futures");

  const handleClick = ({ target }) => {
    const { innerText } = target;
    if (innerText === "Options") {
      setSelected("options")
    } else {
      setSelected("futures")
    }
  }



  return (
    <Fragment>
      <div>
        <div
          className="flex  align-middle justify-center">
          {/* //  style={{ display: "flex", alignItems: "center", justifyContent: "center" }} */}
          <h3 className="font-bold">Select segments </h3>
          <div style={{ display: "flex" }}>
            <button
              className="text-sm ml-3  pr-3 pl-4 p-1 rounded-l-full	"
              style={{ backgroundColor: selected === "futures" ? "#375A9E" : "white", color: selected === "futures" ? "white" : "#3F3F3F" }}
              onClick={(e) => handleClick(e)}>Futures</button>
            <button
              className="text-sm pr-4 pl-3 rounded-r-full"
              style={{ backgroundColor: selected === "options" ? "#375A9E" : "white", color: selected === "options" ? "white" : "#3F3F3F" }}
              onClick={(e) => handleClick(e)}>Options</button>
          </div>
        </div>

        {
          selected === "futures" ? <Fragment>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px" }}
            >
              <div>
                <h4 className="text-l font-bold">Total lot</h4>
                <input
                  name="totalLot"
                  className="border-black m-3 px-3 rounded-full h-5 w-14"
                  onKeyDown={""}
                  onChange={(e)=>handleChange(e)}
                  type="number" min="1"
                   value={totalLeg} 
                   />

              </div>
              <div>
                <h4 className="text-l font-bold">Postion</h4>
                <select className="m-3 text-xs w-14 px-2 rounded-full" name="postion" value="Sell">
                  <option value="Sell">Sell</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>
            </div>
          </Fragment> : <Fragment>
            <div style={{ display: "flex", flexDirection: "row" }}
              className="flex border-red-900 border-4 justify-evenly p-5"
            >
              <div>
                <h4 className="text-l font-bold">Total lot</h4>
                <input
                  className="border-black m-3 px-3 rounded-full h-5 w-14"
                  type="number" min="1" value="1" />
              </div>
              <div>
                <h4 className="text-l font-bold">Postion</h4>
                <select className="m-3 text-xs w-14 px-2 rounded-full" name="postion" value="Sell">
                  <option value="Sell">Sell</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>
              <div>
                <h4 className="text-l font-bold">Option Type</h4>
                <select className="m-3 text-xs w-18 px-2 rounded-full" name="postion" value="Call">
                  <option value="Call">Call</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>
              <div>
                <h4 className="text-l font-bold">Expiry</h4>
                <select className="m-3 text-xs w-18 px-2 rounded-full" name="postion" value="Weekly">
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div>
                <h4 className="text-l font-bold">SelectedStrike Criteria</h4>
                <select className="m-3 text-xs w-28 px-3 rounded-full" name="postion" value="Sell">
                  <option value="Strike Type">Strike Type</option>
                  <option value="Premium Range">Premium Range</option>
                  <option value="Closest Premium">Closest Premium</option>
                  <option value="Straddle Width">Straddle Width</option>
                </select>
              </div>

              {/* --------------------------------------------------------------------------------
                                 //! STRIKE TYPE Selected
               ------------------------------------------------------------------------------------*/}
              {/* <div>
                <h4 className="text-l font-bold">Strike Type</h4>
                <select className="m-3 text-xs w-18 px-2 rounded-full" name="postion" value="ATM">
                  <option value="ATM" >ATM</option>
                  {
                    arrayOf20WithKey("ITM").map((ele) => <option key={ele} value={ele}>{ele}</option>)
                  }
                  {
                    arrayOf20WithKey("OTM").map((ele) => <option key={ele} value={ele}>{ele}</option>)
                  }
                </select>
              </div> */}

              {/* --------------------------------------------------------------------------------
                                 //! PREMIUM RANGE  Selected
               ------------------------------------------------------------------------------------*/}

              {/* <div>
                <h4 className="text-l font-bold">Lower Range</h4>
                <input
                  className="border-black m-3 px-3 rounded-full h-5 w-14"
                  type="number" min="1" value="50" />
              </div>

              <div>
                <h4 className="text-l font-bold">Upper Range</h4>
                <input
                  className="border-black m-3 px-3 rounded-full h-5 w-14"
                  type="number" min="1" value="200" />
              </div> */}

              {/* --------------------------------------------------------------------------------
                                 //! Closest PREMIUM Selected
               ------------------------------------------------------------------------------------*/}
              {/* <div>
                <h4 className="text-l font-bold">Premium</h4>
                <input
                  className="border-black m-3 px-3 rounded-full h-5 w-14"
                  type="number" min="1" value="50" />
              </div> */}

              {/* --------------------------------------------------------------------------------
                                 //! Straddle Width Selected
               ------------------------------------------------------------------------------------*/}

              <div className="my-4 py-2 mx-2 flex justify-center">
                <div className="flex">
                  <h4><b>[</b> ATM Strike</h4>
                  <select className="h-6 mx-3 text-xs w-14 px-2 rounded-full" name="postion" value="+">
                    <option value="+">+</option>
                    <option value="-">-</option>
                  </select>
                  <b>(</b>
                </div>
                <div className="flex justify-center align-middle">
                  <input
                    className="border-black mx-1 pt-1 px-3 rounded-full h-6 w-16"
                    type="number" min="1.5" value="1.5" />
                  <h4>
                    <b>x </b> ATM Straddle Price <b> )]</b>
                  </h4>
                </div>
              </div>


            </div>
          </Fragment>
        }
      </div>
    </Fragment>
  )
}

export default Segment;