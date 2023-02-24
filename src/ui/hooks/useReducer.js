import React from "react";

export default (reducer, initialState) => {
  const [state, dispatchD] = React.useReducer(reducer, initialState);

  const customDispatch = (action) => {
    if (typeof action === "function") {
      return Promise.resolve(action(dispatchD));
    }

    return Promise.resolve(dispatchD(action));
  };

  return [state, customDispatch];
};
