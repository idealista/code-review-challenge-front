import React, { useEffect, useMemo } from "react";
import AdList from "../components/AdList";
import actions from "../../store/actions";
import AppContext from "../../webapp/context/appContext";
import selectors from "../../store/selectors";
import useGetLang from "../hooks/useGetLang";

export default function () {
  const { state, dispatch } = React.useContext(AppContext);
  const [totalAds, setTotalAds] = React.useState(0);
  useEffect(() => {
    dispatch(actions.getAds());
    setTotalAds(state.ads.length);
  }, []);

  useEffect(() => {
    setTotalAds(selectors.getActiveAds(state).length);
  }, [state]);

  const onKeyDown = (e) => {
    dispatch(actions.setNewAdTitle(e.target.value));
  };
  const lang = [] || state.ads.length ? useGetLang() : "";

  const onClick = () => {
    setTotalAds(state.ads.length);
    dispatch(actions.addNewAd(state.newAdTitle));
  };

  const onDiscardMemoized = useMemo(() => {
    return (adId) => {
      dispatch(actions.removeAd(adId));
    };
  }, []);

  return (
    <>
      <span>{`Total Ads in page ${totalAds}`}</span>
      <input onKeyDown={onKeyDown} />
      <button onClick={onClick}>Add new ad</button>
      <AdList
        onDiscard={onDiscardMemoized}
        ads={selectors.getActiveAds(state).sort((a, b) => {
          return a - b;
        })}
      />
    </>
  );
}
