import { createContext, useContext, useReducer } from "react";

const AlertContext = createContext();
export const useAlert = () => useContext(AlertContext);

const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text };
    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: "",
  }); // function reducer need to be created

  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        visible: state.visible,
        show,
        hide,
        text: state.text,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
