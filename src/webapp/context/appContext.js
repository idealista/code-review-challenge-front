import { createContext, useContext } from "react";

export const AppContext = createContext({
  state: {},
  dispatch: () => {}
});

export const useAppContext = () => useContext(AppContext);
