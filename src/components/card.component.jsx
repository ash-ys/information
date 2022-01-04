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
      <div  className = "card-components">
      <h3 >{data.name}</h3>
      <h4 >{data.email}</h4>
      <h5 >{data.phone}</h5>
      </div>
    </div>
  );
};

export default Card;
