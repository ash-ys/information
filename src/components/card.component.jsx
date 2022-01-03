import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
        alt="uimg"
      />
      <h3 className="name">{data.name}</h3>
      <h4 className="email">{data.email}</h4>
      <h5 className="phone">{data.phone}</h5>
    </div>
  );
};

export default Card;
