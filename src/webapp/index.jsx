import React, { useEffect } from "react";
import AdListContainer from "../ui/containers/AdList";
import useReducer from "../ui/hooks/useReducer";
import reducer from "../store/reducer";
import init from "../store/init";
import AppContext from "./context/appContext";

export default function () {
  const [state, dispatch] = useReducer(reducer, init());

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <AdListContainer />
    </AppContext.Provider>
  );
}
