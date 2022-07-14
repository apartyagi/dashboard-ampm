import React from "react";

const ServiceProvider1 = ({ objects }) => {
  return (
    <>
      {Object.keys(objects).map((key, i) => (
        <tr key={i}>
          <th scope="row">{key}</th>
          <td>{objects[key]}</td>
        </tr>
      ))}
    </>
  );
};

export default ServiceProvider1;
