import { useEffect, useMemo, useState } from "react";

export default function Plot({ turn, setTurn, setPlotsValues, plotsValues, plot }) {
  const [clicked, setClicked] = useState(false);
  const [plotTurn, setPlotTurn] = useState(null) 

  useEffect(() => {
    if (plotsValues[plot - 1].plotValue !== null) {
      
      setClicked(true);
    } else {
      setClicked(false)
    }
  }, [plotsValues]);

  const changePlotValue = () => {

    const nuevoArray = plotsValues.map(p => {
      if (p.plot === plot) {
        return {...p, plotValue: turn}
      }
      return p
    })
    console.log(nuevoArray);
    setPlotsValues(nuevoArray)
  }

  return (
    <div
      onClick={() => {
        if (!clicked) {
          setPlotTurn(turn)
          changePlotValue()
          setTurn(!turn);
        }
      }}
      className={`${
        !clicked && "clickable"
      } col-4 border-1 border border-white d-flex justify-content-center align-items-center`}
    >
      {clicked && <span
          className={`bi bi-${plotTurn ? "x" : "circle"} ${
            plotTurn ? "text-danger" : "text-info"
          } ${plotTurn ? "icon-x" : "icon-o"} icon`}
        ></span>}
    </div>
  );
}
