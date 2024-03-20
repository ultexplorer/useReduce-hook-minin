import { useAlert } from "./AlertContext";
const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <h1>Examle of useReducer && useContext hooks.</h1>
      <button
        className="btn btn-success"
        onClick={() => show("Hello from Main.js!")}
      >
        Show alert
      </button>
    </>
  );
};

export default Main;
