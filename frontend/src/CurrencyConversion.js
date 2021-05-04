import React from "react";

const CurrencyConversion = ({ onChangeAmount, onChangeInput, amount }) => {
  return (
    <div>
      <p>Enter amount in SEK to get the currency rate for that country.</p>
      <input
        type="text"
        onChange={(e) => onChangeInput(e)}
        value={amount}
        className="form-control"
        name="amount"
        id="amount"
        aria-describedby="amount"
        placeholder="Amount in SEK"
      />
      <button onClick={onChangeAmount} type="button">
        convert currency
      </button>
    </div>
  );
};

export default CurrencyConversion;
