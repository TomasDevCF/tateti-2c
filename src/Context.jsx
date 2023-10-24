import { createContext, useContext, useMemo, useState } from "react";

const GameContext = createContext()

export function ContextGameProvider(props) {

  const [turn, setTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false)
  const [winner, setWinner] = useState(null)
  const [plotsValues, setPlotsValues] = useState([
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
  ]);

  const value = useMemo(() => {
    return ({
      isGameOver,
      setIsGameOver,
      winner,
      setWinner,
      setPlotsValues,
      plotsValues,
      setTurn,
      turn
    })
  }, [winner, isGameOver, plotsValues, turn])
  return <GameContext.Provider value={value} {...props}/>
}

export function useGameContext() {
  const context = useContext(GameContext)

  if (!context) {
    console.error("El contexto esta fallando.");
  }

  return context
}