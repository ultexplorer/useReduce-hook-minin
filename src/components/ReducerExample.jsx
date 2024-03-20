import Main from "./alert/Main";
import Alert from "./alert/Alert";
import AlertProvider from "./alert/AlertContext";

const ReducerExample = () => {
  return (
    <div>
      <AlertProvider>
        <Alert />
        <Main />
      </AlertProvider>
    </div>
  );
};

export default ReducerExample;
