import { createContext, useContext } from "react";

const AppContext = createContext({
  state: {},
  dispatch: () => {}
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;