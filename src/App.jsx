import "bootswatch/dist/vapor/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./app.css";
import Plot from "./Plot";
import { useGameContext } from "./Context";

function App() {
  const {setWinner, setIsGameOver, plotsValues, setPlotsValues, turn, setTurn, winner, isGameOver} = useGameContext()

  function comparePlots(primaryPlot, secondPlot, thirdPlot) {
    if (plotsValues[primaryPlot].plotValue != null && plotsValues[secondPlot].plotValue != null && plotsValues[thirdPlot].plotValue != null) {
      if (plotsValues[primaryPlot].plotValue === plotsValues[secondPlot].plotValue) {
        if (plotsValues[secondPlot].plotValue === plotsValues[thirdPlot].plotValue) {
          setWinner(plotsValues[primaryPlot].plotValue)
          setIsGameOver(true)
        }
      }
    }
  }

  useEffect(() => {
    let plotsActived = 0;

    for (let i = 0; i < plotsValues.length; i++) {
      if (plotsValues[i].plotValue !== null) {
        plotsActived += 1;
      }
    }

    if (plotsActived >= 5) {
      if (plotsActived >= 9 && !isGameOver) {
        console.log(isGameOver);
        setWinner(null)
        setIsGameOver(true)
      }
      comparePlots(0, 1, 2);
      comparePlots(3, 4, 5);
      comparePlots(6, 7, 8);
      comparePlots(0, 3, 6);
      comparePlots(1, 4, 7);
      comparePlots(2, 5, 8);
      comparePlots(0, 4, 8);
      comparePlots(2, 4, 6);
    }

    
  }, [plotsValues]);

  return (
    <main className="vh-100 vw-100 d-flex flex-column align-items-center ">
      <h1 className="h3 text-center pt-2">Tatetí virtual</h1>
      <div className="info d-flex justify-content-center ps-3">
        <p className="d-flex justify-content-center">
          Turno:{" "}
          {turn ? (
            <span className="bi bi-x text-danger h4"></span>
          ) : (
            <i className="bi bi-circle text-info h6 mb-0 mt-1 ms-1"></i>
          )}
        </p>
        <button type="button" class="btn btn-outline-primary h-75 mx-5" onClick={() => {
          setPlotsValues([
            {
              plot: 1,
              plotValue: null,
            },
            {
              plot: 2,
              plotValue: null,
            },
            {
              plot: 3,
              plotValue: null,
            },
            {
              plot: 4,
              plotValue: null,
            },
            {
              plot: 5,
              plotValue: null,
            },
            {
              plot: 6,
              plotValue: null,
            },
            {
              plot: 7,
              plotValue: null,
            },
            {
              plot: 8,
              plotValue: null,
            },
            {
              plot: 9,
              plotValue: null,
            }
          ])
          setTurn(true)
        }}>Reiniciar</button>
        <p className="d-flex justify-content-center">
          Ganador:{winner === null ? (
            <i class="bi bi-dash text-warning h4"></i>
          ) : winner === false ? (
            <i className="bi bi-circle text-info h6 mb-0 mt-1 ms-1"></i>
          ) : (
            <span className="bi bi-x text-danger h4"></span>
          )}
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 h-75">
        <div className="tablero px-5 h-100 col-xl-6 col-12 row">
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={1}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={2}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={3}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={4}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={5}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={6}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={7}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={8}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
          <Plot
            turn={turn}
            setTurn={setTurn}
            plot={9}
            plotsValues={plotsValues}
            setPlotsValues={setPlotsValues}
          />
        </div>
      </div>
      <footer className="d-flex justify-content-lg-around flex-lg-row flex-column align-items-lg-baseline align-items-center w-50 pt-3">
        <p>Tomas Ontivero</p>
        <p>Franco Aguilar</p>
        <p>Thiago Barrionuevo</p>
      </footer>
    </main>
  );
}

export default App;
