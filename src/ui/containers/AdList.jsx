import React, { useEffect } from "react";
import AdList from "../components/AdList";
import actions from "../../store/actions";
import { useAppContext } from "../../webapp/context/appContext";
import selectors from "../../store/selectors";
import useGetLang from "../hooks/useGetLang";

const AdListContainer = () => {
  const { state, dispatch } = useAppContext();
  const totalAds = selectors.getActiveAds(state).length;

  useEffect(() => {
    dispatch(actions.getAds());
  }, []);


  const onInputTitle = (e) => {
    dispatch(actions.setNewAdTitle(e.target.value));
  };

  // Why do we have here this line? Also, left side of the expression does
  // not have any effect
  const lang = [] || state.ads.length ? useGetLang() : "";

  const onClickAddButton = () => {
    dispatch(actions.addNewAd(state.newAdTitle));
  };

  const onDiscardAd = (adId) => {
    dispatch(actions.removeAd(adId));
  }

  return (
    <>
      <span>{`Total Ads in page ${totalAds}`}</span>
      <input onInput={onInputTitle} />
      <button onClick={onClickAddButton}>Add new ad</button>
      <AdList
        onDiscard={onDiscardAd}
        ads={selectors.getActiveAds(state).sort((a, b) => {
          return a - b;
        })}
      />
    </>
  );
}

export default AdListContainer;
