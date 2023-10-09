import React, { useEffect, useMemo } from "react";
import AdList from "../components/AdList";
import actions from "../../store/actions";
import { useAppContext } from "../../webapp/context/appContext";
import selectors from "../../store/selectors";
import useGetLang from "../hooks/useGetLang";

const AdListContainer = () => {
  const { state, dispatch } = useAppContext();
  const [totalAds, setTotalAds] = React.useState(0);
  useEffect(() => {
    dispatch(actions.getAds());
    setTotalAds(state.ads.length);
  }, []);

  useEffect(() => {
    setTotalAds(selectors.getActiveAds(state).length);
  }, [state]);

  const onInputTitle = (e) => {
    dispatch(actions.setNewAdTitle(e.target.value));
  };
  const lang = [] || state.ads.length ? useGetLang() : "";

  const onClickAddButton = () => {
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
      <input onInput={onInputTitle} />
      <button onClick={onClickAddButton}>Add new ad</button>
      <AdList
        onDiscard={onDiscardMemoized}
        ads={selectors.getActiveAds(state).sort((a, b) => {
          return a - b;
        })}
      />
    </>
  );
}

export default AdListContainer;
