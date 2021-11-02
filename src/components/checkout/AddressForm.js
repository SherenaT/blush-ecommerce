import "./AddressForm.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const AddressForm = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  function goBackHandle() {
    history.goBack();
  }
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleAddress2 = (e) => {
    setAddress2(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleMissingInformation = () => {
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address ||
      !city ||
      !zipCode ||
      !state ||
      !country
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="addressForm">
      <i class="angle left icon" onClick={goBackHandle}>
        Back
      </i>
      <h2 className="formH2">Shipping Address:</h2>
      <form>
        <div className="formRow">
          <input
            onChange={handleFirstName}
            value={firstName}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="First Name"
          />
          <input
            onChange={handleLastName}
            value={lastName}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="Last Name"
          />
        </div>
        <div className="formRow">
          <input
            onChange={handleCompany}
            value={company}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="Company (Optional)"
          />
          <input
            onChange={handlePhoneNumber}
            value={phoneNumber}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="Phone Number (XXX)XXX-XXXX"
          />
        </div>
        <div className="formRow">
          <input
            onChange={handleAddress}
            value={address}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="Address"
          />
        </div>
        <div className="formRow">
          <input
            onChange={handleAddress2}
            value={address2}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>

        <div className="formRow">
          <input
            onChange={handleCity}
            value={city}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="City"
          />
          <input
            onChange={handleZipCode}
            value={zipCode}
            className="addressFormInput"
            type="text"
            name="name"
            placeholder="Zip Code"
          />
        </div>
        <div className="formRow">
          <select
            onChange={handleState}
            value={state}
            className="addressFormInput"
            type="text"
            name="name"
          >
            <option>Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <select
            onChange={handleCountry}
            value={country}
            className="addressFormInput"
            type="text"
            name="name"
          >
            <option>Select Country</option>
            <option value="USA">United States of America</option>
            <option value="PR">Puerto Rico</option>
            <option value="VI">Virgin Islands</option>
          </select>
        </div>
        <div className="formDiv">
          {handleMissingInformation() && (
            <Link
              className="formLink"
              to={{
                pathname: `/ReviewOrder`,
                state: {
                  firstName: firstName,
                  lastName: lastName,
                  company: company,
                  phoneNumber: phoneNumber,
                  address: address,
                  address2: address2,
                  city: city,
                  zipCode: zipCode,
                  state: state,
                  country: country,
                },
              }}
            >
              <button className="formBtn">Proceed to Check Out</button>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
