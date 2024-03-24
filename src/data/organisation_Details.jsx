import React from 'react';

function OrganisationDetails({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p><strong>Establishment:</strong> {data.establishment}</p>
      <p><strong>Authority:</strong> {data.authority}</p>
      <p><strong>Amended:</strong> {data.amended}</p>
      <h3>Statutory Functions:</h3>
      <ul>
        {data.functions.map((func, index) => (
          <li key={index}>
            <strong>{func.bulletPoint}</strong> {func.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrganisationDetails;
