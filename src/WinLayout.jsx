import { useGameContext } from "./Context";

export default function WinLayout() {

  const {isGameOver, winner, setIsGameOver, setPlotsValues, setTurn} = useGameContext()

  return (
    <>
    {isGameOver && <div className="position-absolute top-0 vw-100 vh-100 bg-black bg-opacity-50  d-flex justify-content-center align-items-center">
      <div className="pb-4 pt-3 bg-primary w-50 h-50 d-flex justify-content-between  align-items-center flex-column rounded-4">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-danger text-center">El juego ha terminado</h1>
          <h2 className="d-flex justify-content-center h2 pt-2">
            Ganador:{winner === null ? (
            <i class="bi bi-dash text-warning h1"></i>
          ) : winner === false ? (
            <i className="bi bi-circle text-info h2 mt-1 ms-1"></i>
          ) : (
            <span className="bi bi-x text-danger h1 pb-1"></span>
          )}
          </h2>
        </div>
        <button type="button" onClick={() => {
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
          setIsGameOver(false)
        }} class="btn fs-3 btn-outline-success">
          Jugar de nuevo
        </button>
      </div>
    </div>}
    </>
  )
}
