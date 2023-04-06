import React from "react";
import { Routes, Route } from "react-router";
import Listings from "./containers/Listings";
import Login from "./components/Login";
import AddListings from "./containers/AddListings";
import BusinessDetails from "./containers/BusinessDetails";

// Write component imports here //

export default function Router(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Listings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addBusiness" element={<AddListings />} />
      <Route path="/details/:name" element={<BusinessDetails />} />
    </Routes>
  );
}
