import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Country from "./Country";
import CountryDetails from "./CountryDetails";
import CurrencyConversion from "./CurrencyConversion";

function App() {
  const [countryName, setCountryName] = useState("Not yet provided");
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState([]);
  const [amountChange, setAmt] = useState(false);

  const onChangeForm = (e) => {
    setCountryName(e.target.value);
  };
  const onChangeInput = (e) => {
    setAmount(e.target.value);
  };
  const onChangeAmount = (e) => {
    user.map((listValue) => {
      listValue.map(item => item.rate = item.rate * amount);
      return true;
    });
    setAmt(true);
    setUser(user);
  };
  const getCountry = async () => {
    axios
      .get("/getCountry", { params: { cntry: countryName } })
      .then((response) => {
        response.data.map((listValue) => {
          axios
            .get("/getCurrencyConvert", {
              params: { toCurr: listValue.currencies[0].code },
            })
            .then((response1) => {
              listValue.rate = response1.data;
            });
          return user;
        });
        setUser(oldArray => [...oldArray, response.data]);
      });
  };
  useEffect(() => {
    if (amountChange) {
      setUser((state) => {
        console.log('state');
        return state;
      });
    }
  }, [amountChange]);
  return (
    <div className="App">
      <header className="App-header">
        <Country
          countryName={countryName}
          getCountry={getCountry}
          onChangeForm={onChangeForm}
        />
        <CurrencyConversion
          amount={amount}
          onChangeInput={onChangeInput}
          onChangeAmount={onChangeAmount}
        />
        <CountryDetails users={user} amount={amount} />
      </header>
    </div>
  );
}

export default App;
