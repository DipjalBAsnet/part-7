import React, { useState, useEffect } from "react";
import axios from "axios";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!name) return;

    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
        );
        setCountry({ found: true, data: response.data });
      } catch (error) {
        setCountry({ found: false });
      }
    };

    fetchCountry();
  }, [name]);

  return country;
};

const Country = ({ country }) => {
  if (!country) {
    return null;
  }

  if (!country.found) {
    return <div>not found...</div>;
  }

  const countryName = country.data?.name?.common || "Unknown Country";
  const capital = country.data?.capital?.[0] || "Unknown Capital";
  const population = country.data?.population || "Population not available";
  const flagUrl = country.data?.flags?.png || "https://via.placeholder.com/100"; // Fallback flag

  return (
    <div>
      <h3>{countryName} </h3>
      <div>capital {capital} </div>
      <div>population {population}</div>
      <img src={flagUrl} height="100" alt={`flag of ${countryName}`} />
    </div>
  );
};

const App = () => {
  const nameInput = useField("text");
  const [name, setName] = useState("");
  const country = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  );
};

export default App;
