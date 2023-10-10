import actions from "../actions";

import container from "../../bootstrap/IoC/container";
const dispatchMock = jest.fn();

/*
Hay un problema con jest.mock en codesandbox. De momento
no mockeo el container que se importa
*/

const getAdsSuccessMock = {
  execute: jest.fn(() => Promise.resolve([]))
};

const getAdsFailureMock = {
  execute: jest.fn(() => Promise.reject())
};
afterEach(() => {
  jest.clearAllMocks();
});

describe("Actions tests", () => {
  test("setAds action creator should return the expected action", () => {
    expect(actions.setAds("ad")).toStrictEqual({
      type: "SET_ADS",
      payload: "ad"
    });
  });

  test("Given getAdsService with promise resolve, getAds action thunk should dispatch the expected actions", async () => {
    container.add("GetAds", () => getAdsSuccessMock);
    const flushPromises = () => new Promise(setImmediate);
    actions.getAds()(dispatchMock);
    await flushPromises();
    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: "START_LOADING" });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, {
      type: "SET_ADS",
      payload: []
    });
    expect(dispatchMock).toHaveBeenNthCalledWith(3, { type: "STOP_LOADING" });
  });

  test("Given getAdsService with promise reject, getAds action thunk should dispatch the expected actions", async () => {
    container.add("GetAds", () => getAdsFailureMock);
    const flushPromises = () => new Promise(setImmediate);
    actions.getAds()(dispatchMock);
    await flushPromises();
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, { type: "START_LOADING" });
    expect(dispatchMock).toHaveBeenNthCalledWith(2, { type: "STOP_LOADING" });
  });
});
