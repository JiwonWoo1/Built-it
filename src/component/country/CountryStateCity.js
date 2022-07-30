import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';

export default function CountryStateCity() {
  const handleStateSelect = (event) => setState(event.target.value)
  const handleCitySelect = (event) => setSelectedCity(event.target.value)

  const states = State.getStatesOfCountry("US")

  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState("")
  const [state, setState] = useState("AZ")


  useEffect(() => {
    setCities(City.getCitiesOfState("US", state))
  }, [state]);

  return (
    <div className="App">
      <Form.Select aria-label="select" onChange={handleStateSelect}>
        {
          states.map(
            (state, index) => <option key={index} value={state.isoCode}>{state.name}</option>)
        }
      </Form.Select>
      <Form.Select aria-label="select" onChange={handleCitySelect}>
        {
          cities && cities.map(
            (city, index) => <option key={index} value={city.name}>{city.name}</option>)
        }
      </Form.Select>
    </div>
  );
}
