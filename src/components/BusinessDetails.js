import React from "react";
import Map from "./Map";
import { useParams } from "react-router-dom";
import "../styles/BusinessDetails.css";

export default function BusinessDetails(props) {
  const { name } = useParams();
  console.log(name);
  const foundBusiness = props.businesses.find(
    (business) => business.name === name
  );
  console.log(foundBusiness);
  return (
    <div className="business-details-container">
      <div className="business-details-wrapper">
        <h1 className="business-details-title">{foundBusiness.name}</h1>
        <h3 className="business-details-address">{foundBusiness.address}</h3>
        <h3 className="business-details-hours">{foundBusiness.hours}</h3>
        <p className="business-details-description">
          {foundBusiness.description}
        </p>
      </div>
      <Map name={foundBusiness.name} address={foundBusiness.address} />
    </div>
  );
}
