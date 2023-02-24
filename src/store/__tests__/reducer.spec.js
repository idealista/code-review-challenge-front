import reducer from "../reducer";

describe("Reducer tests", () => {
  test("Given no params, reducer must return empty object", () => {
    expect(reducer()).toStrictEqual({});
  });
  test("Given initial state and no action, reducer must return initial state", () => {
    expect(
      reducer({
        test: 1
      })
    ).toStrictEqual({ test: 1 });
  });
  test("Given initial state and action with SET_ADS type and payload, state with new ads must expected", () => {
    const newState = reducer({}, { type: "SET_ADS", payload: [{ ad: 1 }] });
    expect(newState).toStrictEqual({
      ads: [{ ad: 1 }]
    });
  });
  test("Given initial state and action with START_LOADING type and payload, state with isLoading true", () => {
    const newState = reducer({}, { type: "START_LOADING" });
    expect(newState).toStrictEqual({
      isLoading: true
    });
  });
  test("Given initial state and action with STOP_LOADING type and payload, state with isLoading false", () => {
    const newState = reducer(
      {
        isLoading: true
      },
      { type: "STOP_LOADING" }
    );
    expect(newState).toStrictEqual({
      isLoading: false
    });
  });
});
