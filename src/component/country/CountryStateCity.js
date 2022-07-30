import React, { useEffect } from "react";
import { useFormik } from "formik";
import {Form} from 'react-bootstrap';
import Select from "react-select";
import { Country, State, City }  from 'country-state-city';
import csc from "country-state-city";

export default function CountryStateCity() {
    const addressFromik = useFormik({
        initialValues: {
        country: "US",
        state: null,
        city: null
        },
        onSubmit: (values) => console.log(JSON.stringify(values))
    });

    const states = State.getStatesOfCountry(addressFromik.initialValues.country)
    
    // update states
    const updatedStates = states.map((countryId) => ({
        label: countryId.name,
        value: countryId.isoCode, ...countryId
    }));
    const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

    const cities = City.getCitiesOfState(addressFromik.initialValues.country, addressFromik.initialValues.state)
    
    const updatedCities = (stateId) => 
        City.getCitiesOfState(stateId)
        .map((city) => ({
            label: city.name,
            value: city.isoCode, ...city
        }))
    
    console.log(City.getCitiesOfState('US', 'AZ'))

    console.log(addressFromik);
    useEffect(() => {}, [values]);

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <Select
                id="state"
                name="state"
                label="state"
                options={updatedStates}
                value={values.state}
                onChange={(value) => {
                    setValues({ state: value, city: null});
                }}
            />
            <Select
            id="city"
            name="city"
            options={updatedCities(values.state ? values.state.value : 'AZ')}
            value={values.city}
            onChange={(value) => setFieldValue("city", value)}
            />
            {/* <p>{JSON.stringify(state)}</p> */}
        </form>
      {/* <form onSubmit={handleSubmit}>
        <Select
          id="city"
          name="city"
          options={updatedCities(values.state ? values.state.value : null)}
          value={values.city}
          onChange={(value) => setFieldValue("city", value)}
        />
        <button type="submit">Submit</button>
        <p>{JSON.stringify(csc.get)}</p>
      </form> */}
    </div>
  );
}
