import React from 'react';
import Ad from './Ad';
import { MAX_ADS_TO_VISUALIZE } from "../../domain/constants";

const AdList = ({ ads, onDiscard }) => {
  return (
    <div>
      {ads.slice(0, MAX_ADS_TO_VISUALIZE).map((ad) => (
        <Ad
          key={ad.id}
          id={ad.id}
          title={ad.title}
          active={ad.active}
          kind={ad.kind}
          onDiscard={onDiscard}
        ></Ad>
      ))}
    </div>
  );
};

export default AdList;
