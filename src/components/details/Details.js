import React from 'react';
import { useSelector } from 'react-redux';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const Details = () => {
  const state = useSelector((state) => state.detailsReducer.details[0]);

  const detailsTitles = ['Previous Close',
    'Day High', 'Day Low', 'Year High', 'Year Low', 'Exchange'];
  const detailsInfo = [state.previousClose,
    state.dayHigh, state.dayLow, state.yearHigh, state.yearLow, state.exchange];

  const len = detailsInfo.length;

  const detailsInfoDisplay = [];

  for (let i = 0; i < len; i += 1) {
    detailsInfoDisplay.push(
      <div className="details-info-item">
        <div>{detailsTitles[i]}</div>
        {
          (typeof (detailsInfo[i]) === 'number')
            ? (
              <div>
                $
                {detailsInfo[i].toFixed(2)}
              </div>
            )
            : <div>{detailsInfo[i]}</div>
        }
      </div>,
    );
  }

  const detailDisplay = (
    <div key={state.symbol} className="details-container">
      <div className="details-main-container">
        <div className="symbol-container">{state.symbol}</div>
        <div className="price-container">
          $
          {state.price.toFixed(2)}
          {
            (state.changesPercentage < 0)
              ? <FaAngleDown />
              : <FaAngleUp />
          }
        </div>
      </div>
      <div className="details-breakline">
        <p>
          {state.name}
          :
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {detailDisplay}
      <div className="details-info-list">
        {detailsInfoDisplay}
      </div>
    </div>
  );
};

export default Details;
