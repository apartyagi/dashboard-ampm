import React from "react";

const VehiclesComp = ({ data }) => {
  return (
    <>
      <tr>
        <th scope="row">Number Plate</th>
        <td>{data.vehicleLicensePlate}</td>
      </tr>
      <tr>
        <th scope="row">Vin NUMBER</th>
        <td>{data.vehicleVin}</td>
      </tr>
      <tr>
        <th scope="row">Vehicle Model</th>
        <td>{data.vehicleModel}</td>
      </tr>
      <tr>
        <th scope="row">Vehicle Make</th>
        <td>{data.vehicleMake}</td>
      </tr>
      <tr>
        <th scope="row">Insurance Policy</th>
        <td>{data.vehicleInsurancePolicy}</td>
      </tr>
      <tr>
        <th scope="row">Insurance Carrier</th>
        <td>{data.vehicleInsuranceCarrier}</td>
      </tr>
      <tr>
        <th scope="row">Insurance Expire </th>
        <td>{data.vehicleInsuranceExpirationDate}</td>
      </tr>
    </>
  );
};

export default VehiclesComp;
