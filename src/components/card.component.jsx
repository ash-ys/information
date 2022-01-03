import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
        alt="uimg"
      />
      <h3>{data.name}</h3>
    </div>
  );
};

export default Card;
