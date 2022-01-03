import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="overflow">
      <img
        src={`https://robohash.org/${data.id}?set=set2`}
        alt="uimg"
      />
      </div>
      <h3 className="name">{data.name}</h3>
      <h4 className="email">{data.email}</h4>
      <h5 className="phone">{data.phone}</h5>
    </div>
  );
};

export default Card;
