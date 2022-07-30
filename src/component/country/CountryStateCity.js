import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Form, Container, Row, Col } from 'react-bootstrap';
import Select from "react-select";
import { Country, State, City } from 'country-state-city';

export default function CountryStateCity() {
  const handleStateSelect = (event) => setState(event.target.value)
  const handleCitySelect = (event) => setSelectedCity(event.target.value)

  const states = State.getStatesOfCountry("US")

  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState("serch")
  const [state, setState] = useState("AZ")


  useEffect(() => {
    setCities(City.getCitiesOfState("US", state))
  }, [state]);

  return (
    <div className="App">
        <Container >
            <Row>
                <Col xs lg="2">
                    <p>State</p>
                    <Form.Select style={{width: 200}} aria-label="select" onChange={handleStateSelect}>
                    {
                    states.map(
                        (state, index) => <option key={index} value={state.isoCode}> 
                        {state.name}</option>)
                    }
                    </Form.Select>
                </Col>
                <Col>
                <p>City</p>
                    <Form.Select style={{width: 200}} aria-label="select" onChange={handleCitySelect}>
                    {
                    cities && cities.map(
                        (city, index) => <option key={index} value={city.name}>{city.name}</option>)
                    }
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
