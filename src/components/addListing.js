import React from "react";
import { useState } from "react";
import "../styles/AddListings.css";
import { Button } from "@mui/material";
import Map from "./Map";

export default function AddListing(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let state = {
      name: name,
      description: description,
      hours: hours,
      address: address,
    };
    props.addBusiness(state);
  };
  return (
    <div className="add-listing-container">
      <section className="add-listing-form-container">
        <form onSubmit={handleSubmit} className="add-listing-form-container">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="add-listing-input"
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="add-listing-input"
          />
          <input
            type="text"
            placeholder="Hours"
            onChange={(e) => {
              setHours(e.target.value);
            }}
            className="add-listing-input"
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="add-listing-input"
          />
          <Button variant="contained" type="submit" sx={{width: "50%", borderRadius: "0", marginTop: "10px"}}>SAVE</Button>
        </form>
      </section>
      <Map name={name} address={address} />
    </div>
  );
}
